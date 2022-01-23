import { Stack, App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import {
  Ipam,
  IpamScope,
  IpamPool,
  IpamScopeType,
  IpamPoolAddressFamily,
  IpamAllocation,
} from '../src/index';

test('Snapshot', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  const ipam = new Ipam(stack, 'IPAM', {});
  const scope = new IpamScope(stack, 'Scope', {
    ipam: ipam,
    ipamScopeType: IpamScopeType.PRIVATE,
  });

  const pool = new IpamPool(stack, 'Pool', {
    addressFamily: IpamPoolAddressFamily.IPV4,
    ipamScopeId: scope.ipamScopeId,
  });

  pool.provisionCidr('10.0.0.0/8');
  pool.provisionCidr('172.16.0.0/12');
  pool.provisionCidr('192.168.0.0/16');

  const poolUsEast1 = new IpamPool(stack, 'PoolUsEast1', {
    addressFamily: IpamPoolAddressFamily.IPV4,
    ipamScopeId: ipam.privateDefaultScopeId,
    sourceIpamPoolId: pool.ipamPoolId,
    allocationMinNetmaskLength: 16,
    allocationMaxNetmaskLength: 24,
    allocationDefaultNetmaskLength: 16,
    locale: 'us-east-1',
  });

  poolUsEast1.provisionCidr('10.0.0.0/12');

  const poolUsEast2 = new IpamPool(stack, 'PoolUsEast2', {
    addressFamily: IpamPoolAddressFamily.IPV4,
    ipamScopeId: ipam.privateDefaultScopeId,
    sourceIpamPoolId: pool.ipamPoolId,
    allocationResourceTags: [
      {
        key: 'type',
        value: 'test',
      },
    ],
    locale: 'us-east-2',
  });

  poolUsEast2.provisionCidr('10.16.0.0/12');

  new IpamAllocation(stack, 'Allocation', {
    ipamPool: poolUsEast1,
  });

  new IpamAllocation(stack, 'AllocationUsEast2', {
    ipamPool: poolUsEast2,
    netmaskLength: 16,
  });

  expect(Template.fromStack(stack)).toMatchSnapshot();
});