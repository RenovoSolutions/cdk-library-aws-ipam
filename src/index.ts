import {
  aws_ec2 as ec2,
  CfnTag,
  IResolvable,
  Stack,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

export enum IpamPoolAddressFamily {
  IPV4 = 'ipv4',
  IPV6 = 'ipv6',
}

/**
 * Properties of the IPAM
 */
export interface IpamProps {
  /**
   * The description for the IPAM.
   */
  readonly description?: string;
  /**
   * The operating Regions for an IPAM.
   *
   * Operating Regions are AWS Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only
   * discovers and monitors resources in the AWS Regions you select as operating Regions.
   *
   * For more information about operating Regions, see Create an IPAM in the Amazon VPC IPAM User Guide.
   * @see https://vpc/latest/ipam/create-ipam.html
   *
   * @default Stack.of(this).region
   */
  readonly operatingRegions?: string[];
  /**
   * The key/value combination of tags to assign to the resource.
   */
  readonly tags?: CfnTag[];
}

/**
 * Creates an IPAM.
 *
 * IPAM is a VPC feature that you can use to automate your IP address management workflows including
 * assigning, tracking, troubleshooting, and auditing IP addresses across AWS Regions and accounts
 * throughout your AWS Organization. For more information, see What is IPAM? in the Amazon VPC IPAM
 * User Guide.
 *
 * @see https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html
 */
export class Ipam extends Construct {

  /**
   * The underlying IPAM resource
   */
  public readonly ipam: ec2.CfnIPAM;
  /**
   * The ID of the resulting IPAM resource
   */
  public readonly ipamId: string;
  /**
   * The default private scope ID
   */
  public readonly privateDefaultScopeId: string;
  /**
   * The default public scope ID
   */
  public readonly publicDefaultScopeId: string;
  /**
   * The number of scopes in this IPAM
   */
  public readonly scopeCount: number;

  constructor(scope: Construct, id: string, props: IpamProps) {
    super(scope, id);

    let operatingRegions:ec2.CfnIPAM.IpamOperatingRegionProperty[] = [];
    if (props.operatingRegions) {
      for (const region of props.operatingRegions) {
        operatingRegions.push({
          regionName: region,
        });
      }
    } else {
      operatingRegions.push({
        regionName: Stack.of(this).region,
      });
    }

    this.ipam = new ec2.CfnIPAM(this, 'IPAM', {
      description: props.description,
      operatingRegions,
      tags: props.tags,
    });

    this.ipamId = this.ipam.ref;
    this.privateDefaultScopeId = this.ipam.attrPrivateDefaultScopeId;
    this.publicDefaultScopeId = this.ipam.attrPublicDefaultScopeId;
    this.scopeCount = this.ipam.attrScopeCount;
  }
}

/**
 * Properties of an IPAM Scope
 */
export interface IpamScopeProps {
  /**
   * The IPAM for which you're creating the scope.
   */
  readonly ipam: Ipam;
  /**
   * The description of the scope.
   */
  readonly description?: string;
  /**
   * The key/value combination of tags to assign to the resource.
   */
  readonly tags?: CfnTag[];
}

/**
 * An IPAM Scope
 *
 * In IPAM, a scope is the highest-level container within IPAM. An IPAM contains two default scopes.
 * Each scope represents the IP space for a single network. The private scope is intended for all private
 * IP address space. The public scope is intended for all public IP address space. Scopes enable you to
 * reuse IP addresses across multiple unconnected networks without causing IP address overlap or conflict.
 */
export class IpamScope extends Construct {

  /**
   * The underlying IPAM Scope resource
   */
  public readonly scope: ec2.CfnIPAMScope;
  /**
   * The ARN of the resulting IPAM Scope resource
   */
  public readonly arn: string;
  /**
   * The ARN of the IPAM this scope belongs to
   */
  public readonly ipamArn: string;
  /**
   * The ID of the resulting IPAM Scope resource
   */
  public readonly ipamScopeId: string;
  /**
   * Indicates whether the scope is the default scope for the IPAM
   */
  public readonly isDefault: IResolvable;
  /**
   * The number of pools in the scope
   */
  public readonly poolCount: number;


  constructor(scope: Construct, id: string, props: IpamScopeProps) {
    super(scope, id);

    this.scope = new ec2.CfnIPAMScope(this, 'Scope', {
      description: props.description,
      ipamId: props.ipam.ipamId,
      tags: props.tags,
    });

    this.arn = this.scope.attrArn;
    this.ipamArn = this.scope.attrIpamArn;
    this.ipamScopeId = this.scope.attrIpamScopeId;
    this.isDefault = this.scope.attrIsDefault;
    this.poolCount = this.scope.attrPoolCount;
  }
}

/**
 * Properties of an IPAM Pool
 */
export interface IpamPoolProps {
  /**
   * The address family of the pool, either IPv4 or IPv6.
   */
  readonly addressFamily: IpamPoolAddressFamily;
  /**
   * The IPAM scope this pool is associated with.
   */
  readonly ipamScopeId: string;
  /**
   * The default netmask length for allocations added to this pool.
   *
   * If, for example, the CIDR assigned to this pool is 10.0.0.0/8 and you enter 16 here,
   * new allocations will default to 10.0.0.0/16.
   */
  readonly allocationDefaultNetmaskLength?: number;
  /**
   * The maximum netmask length possible for CIDR allocations in this IPAM pool to be compliant.
   *
   * The maximum netmask length must be greater than the minimum netmask length.
   * Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are 0 - 128.
   */
  readonly allocationMaxNetmaskLength?: number;
  /**
   * The minimum netmask length required for CIDR allocations in this IPAM pool to be compliant.
   *
   * The minimum netmask length must be less than the maximum netmask length.
   * Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are 0 - 128.
   */
  readonly allocationMinNetmaskLength?: number;
  /**
   * Tags that are required for resources that use CIDRs from this IPAM pool.
   *
   * Resources that do not have these tags will not be allowed to allocate space from the pool.
   * If the resources have their tags changed after they have allocated space or if the allocation
   * tagging requirements are changed on the pool, the resource may be marked as noncompliant.
   */
  readonly allocationResourceTags?: CfnTag[];
  /**
   * If selected, IPAM will continuously look for resources within the CIDR range of this pool and automatically import
   * them as allocations into your IPAM. The CIDRs that will be allocated for these resources must not already be allocated
   * to other resources in order for the import to succeed. IPAM will import a CIDR regardless of its compliance with the
   * pool's allocation rules, so a resource might be imported and subsequently marked as noncompliant. If IPAM discovers
   * multiple CIDRs that overlap, IPAM will import the largest CIDR only. If IPAM discovers multiple CIDRs with matching
   * CIDRs, IPAM will randomly import one of them only.
   *
   * A locale must be set on the pool for this feature to work.
   */
  readonly autoImport?: boolean;
  /**
   * The description of the pool.
   */
  readonly description?: string;
  /**
   * The locale of the IPAM pool. In IPAM, the locale is the AWS Region where you want to make an IPAM pool available
   * for allocations.Only resources in the same Region as the locale of the pool can get IP address allocations from the pool.
   * You can only allocate a CIDR for a VPC, for example, from an IPAM pool that shares a locale with the VPC’s Region.
   * Note that once you choose a Locale for a pool, you cannot modify it. If you choose an AWS Region for locale that has
   * not been configured as an operating Region for the IPAM, you'll get an error.
   */
  readonly locale?: string;
  /**
   * The CIDRs provisioned to the IPAM pool. A CIDR is a representation of an IP address and its associated network mask
   * (or netmask) and refers to a range of IP addresses
   */
  readonly provisionedCidrs?: ec2.CfnIPAMPool.ProvisionedCidrProperty[];
  /**
   * The ID of the source IPAM pool. You can use this option to create an IPAM pool within an existing source pool.
   */
  readonly sourceIpamPoolId?: string;
  /**
   * The key/value combination of tags to assign to the resource.
   */
  readonly tags?: CfnTag[];
}

/**
 * An IPAM Pool
 *
 * In IPAM, a pool is a collection of contiguous IP addresses CIDRs. Pools enable you to organize your IP addresses
 * according to your routing and security needs. For example, if you have separate routing and security needs for
 * development and production applications, you can create a pool for each.
 */
export class IpamPool extends Construct {

  /**
   * The underlying IPAM Pool resource
   */
  public readonly pool: ec2.CfnIPAMPool;
  /**
   * The ARN of the resulting IPAM Pool resource
   */
  public readonly arn: string;
  /**
   * The ARN of the IPAM this pool belongs to
   */
  public readonly ipamArn: string;
  /**
   * The ID of the resulting IPAM Pool resource
   */
  public readonly ipamPoolId: string;
  /**
   * The ARN of the scope of the IPAM Pool
   */
  public readonly ipamScopeArn: string;
  /**
   * The IPAM scope type (public or private) of the scope of the IPAM Pool
   */
  public readonly ipamScopeType: string;
  /**
   * The depth of pools in your IPAM pool.
   */
  public readonly poolDepth: number;
  /**
   * The state of the IPAM pool.
   */
  public readonly state: string;
  /**
   * A message related to the failed creation of an IPAM pool.
   */
  public readonly stateMessage: string;
  /**
   * The provisioned CIDRs for this pool
   */
  public readonly provisionedCidrs: ec2.CfnIPAMPool.ProvisionedCidrProperty[];
  /**
   * The default netmask length for allocations added to this pool.
   */
  public readonly allocationDefaultNetmaskLength: number | undefined;

  constructor(scope: Construct, id: string, props: IpamPoolProps) {
    super(scope, id);

    this.provisionedCidrs = props.provisionedCidrs ?? [];

    this.pool = new ec2.CfnIPAMPool(this, 'Scope', {
      addressFamily: props.addressFamily,
      ipamScopeId: props.ipamScopeId,
      description: props.description,
      allocationDefaultNetmaskLength: props.allocationDefaultNetmaskLength,
      allocationMaxNetmaskLength: props.allocationMaxNetmaskLength,
      allocationMinNetmaskLength: props.allocationMinNetmaskLength,
      allocationResourceTags: props.allocationResourceTags,
      autoImport: props.autoImport,
      locale: props.locale,
      sourceIpamPoolId: props.sourceIpamPoolId,
      tags: props.tags,
      provisionedCidrs: this.provisionedCidrs,
    });

    this.arn = this.pool.attrArn;
    this.ipamArn = this.pool.attrIpamArn;
    this.ipamPoolId = this.pool.attrIpamPoolId;
    this.ipamScopeArn = this.pool.attrIpamScopeArn;
    this.ipamScopeType = this.pool.attrIpamScopeType;
    this.poolDepth = this.pool.attrPoolDepth;
    this.state = this.pool.attrState;
    this.stateMessage = this.pool.attrStateMessage;
    this.allocationDefaultNetmaskLength = props.allocationDefaultNetmaskLength;
  }

  /**
   * Adds a CIDR to the pool
   *
   * @param cidr The CIDR to add to the pool
   */
  public provisionCidr(cidr: string) {
    this.provisionedCidrs.push({ cidr });
    this.pool.addPropertyOverride('ProvisionedCidrs', {
      cidr,
    });
  }
}

/**
 * Properties of an IPAM Allocation
 */
export interface IpamAllocationProps {
  /**
   * The IPAM pool from which you would like to allocate a CIDR.
   */
  readonly ipamPool: IpamPool;
  /**
   * The CIDR you would like to allocate from the IPAM pool. Note the following:
   *
   * If there is no DefaultNetmaskLength allocation rule set on the pool, you must
   * specify either the NetmaskLength or the CIDR.
   *
   * If the DefaultNetmaskLength allocation rule is set on the pool, you can specify
   * either the NetmaskLength or the CIDR and the DefaultNetmaskLength allocation rule
   * will be ignored.
   */
  readonly cidr?: string;
  /**
   * A description of the pool allocation
   */
  readonly description?: string;
  /**
   * The netmask length of the CIDR you would like to allocate from the IPAM pool. Note the following:
   *
   * If there is no DefaultNetmaskLength allocation rule set on the pool, you must specify either the
   * NetmaskLength or the CIDR.
   *
   * If the DefaultNetmaskLength allocation rule is set on the pool, you can specify either the
   * NetmaskLength or the CIDR and the DefaultNetmaskLength allocation rule will be ignored.
   */
  readonly netmaskLength?: number;
}

/**
 * An IPAM Allocation
 *
 * In IPAM, an allocation is a CIDR assignment from an IPAM pool to another resource or IPAM pool.
 */
export class IpamAllocation extends Construct {

  /**
   * The underlying IPAM Allocation resource
   */
  public readonly allocation: ec2.CfnIPAMAllocation;
  /**
   * The ID of the allocation
   */
  public readonly ipamPoolAllocationId: string;

  constructor(scope: Construct, id: string, props: IpamAllocationProps) {
    super(scope, id);

    if (props.cidr == undefined && props.netmaskLength == undefined && props.ipamPool.allocationDefaultNetmaskLength == undefined) {
      throw new Error('Either CIDR or NetmaskLength must be specified when no default netmask length is set on the pool');
    } else {
      this.allocation = new ec2.CfnIPAMAllocation(this, 'Allocation', {
        ipamPoolId: props.ipamPool.ipamPoolId,
        cidr: props.cidr,
        description: props.description,
        netmaskLength: props.netmaskLength,
      });

      this.ipamPoolAllocationId = this.allocation.attrIpamPoolAllocationId;
    }
  }
}
