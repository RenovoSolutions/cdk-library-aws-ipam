# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### Ipam <a name="@renovosolutions/cdk-library-aws-ipam.Ipam" id="renovosolutionscdklibraryawsipamipam"></a>

Creates an IPAM.

PAM is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across AWS Regions and accounts throughout your AWS Organization. For more information, see What is IPAM? in the Amazon VPC IPAM User Guide.

> https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html

#### Initializers <a name="@renovosolutions/cdk-library-aws-ipam.Ipam.Initializer" id="renovosolutionscdklibraryawsipamipaminitializer"></a>

```typescript
import { Ipam } from '@renovosolutions/cdk-library-aws-ipam'

new Ipam(scope: Construct, id: string, props: IpamProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#renovosolutionscdklibraryawsipamipamparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#renovosolutionscdklibraryawsipamipamparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#renovosolutionscdklibraryawsipamipamparameterprops)<span title="Required">*</span> | [`@renovosolutions/cdk-library-aws-ipam.IpamProps`](#@renovosolutions/cdk-library-aws-ipam.IpamProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.Ipam.parameter.scope" id="renovosolutionscdklibraryawsipamipamparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.Ipam.parameter.id" id="renovosolutionscdklibraryawsipamipamparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.Ipam.parameter.props" id="renovosolutionscdklibraryawsipamipamparameterprops"></a>

- *Type:* [`@renovosolutions/cdk-library-aws-ipam.IpamProps`](#@renovosolutions/cdk-library-aws-ipam.IpamProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`ipam`](#renovosolutionscdklibraryawsipamipampropertyipam)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.CfnIPAM`](#aws-cdk-lib.aws_ec2.CfnIPAM) | The underlying IPAM resource. |
| [`ipamId`](#renovosolutionscdklibraryawsipamipampropertyipamid)<span title="Required">*</span> | `string` | The ID of the resulting IPAM resource. |
| [`privateDefaultScopeId`](#renovosolutionscdklibraryawsipamipampropertyprivatedefaultscopeid)<span title="Required">*</span> | `string` | The default private scope ID. |
| [`publicDefaultScopeId`](#renovosolutionscdklibraryawsipamipampropertypublicdefaultscopeid)<span title="Required">*</span> | `string` | The default public scope ID. |
| [`scopeCount`](#renovosolutionscdklibraryawsipamipampropertyscopecount)<span title="Required">*</span> | `number` | The number of scopes in this IPAM. |

---

##### `ipam`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.Ipam.property.ipam" id="renovosolutionscdklibraryawsipamipampropertyipam"></a>

```typescript
public readonly ipam: CfnIPAM;
```

- *Type:* [`aws-cdk-lib.aws_ec2.CfnIPAM`](#aws-cdk-lib.aws_ec2.CfnIPAM)

The underlying IPAM resource.

---

##### `ipamId`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.Ipam.property.ipamId" id="renovosolutionscdklibraryawsipamipampropertyipamid"></a>

```typescript
public readonly ipamId: string;
```

- *Type:* `string`

The ID of the resulting IPAM resource.

---

##### `privateDefaultScopeId`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.Ipam.property.privateDefaultScopeId" id="renovosolutionscdklibraryawsipamipampropertyprivatedefaultscopeid"></a>

```typescript
public readonly privateDefaultScopeId: string;
```

- *Type:* `string`

The default private scope ID.

---

##### `publicDefaultScopeId`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.Ipam.property.publicDefaultScopeId" id="renovosolutionscdklibraryawsipamipampropertypublicdefaultscopeid"></a>

```typescript
public readonly publicDefaultScopeId: string;
```

- *Type:* `string`

The default public scope ID.

---

##### `scopeCount`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.Ipam.property.scopeCount" id="renovosolutionscdklibraryawsipamipampropertyscopecount"></a>

```typescript
public readonly scopeCount: number;
```

- *Type:* `number`

The number of scopes in this IPAM.

---


### IpamAllocation <a name="@renovosolutions/cdk-library-aws-ipam.IpamAllocation" id="renovosolutionscdklibraryawsipamipamallocation"></a>

An IPAM Allocation.

In IPAM, an allocation is a CIDR assignment from an IPAM pool to another resource or IPAM pool.

#### Initializers <a name="@renovosolutions/cdk-library-aws-ipam.IpamAllocation.Initializer" id="renovosolutionscdklibraryawsipamipamallocationinitializer"></a>

```typescript
import { IpamAllocation } from '@renovosolutions/cdk-library-aws-ipam'

new IpamAllocation(scope: Construct, id: string, props: IpamAllocationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#renovosolutionscdklibraryawsipamipamallocationparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#renovosolutionscdklibraryawsipamipamallocationparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#renovosolutionscdklibraryawsipamipamallocationparameterprops)<span title="Required">*</span> | [`@renovosolutions/cdk-library-aws-ipam.IpamAllocationProps`](#@renovosolutions/cdk-library-aws-ipam.IpamAllocationProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamAllocation.parameter.scope" id="renovosolutionscdklibraryawsipamipamallocationparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamAllocation.parameter.id" id="renovosolutionscdklibraryawsipamipamallocationparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamAllocation.parameter.props" id="renovosolutionscdklibraryawsipamipamallocationparameterprops"></a>

- *Type:* [`@renovosolutions/cdk-library-aws-ipam.IpamAllocationProps`](#@renovosolutions/cdk-library-aws-ipam.IpamAllocationProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`allocation`](#renovosolutionscdklibraryawsipamipamallocationpropertyallocation)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.CfnIPAMAllocation`](#aws-cdk-lib.aws_ec2.CfnIPAMAllocation) | The underlying IPAM Allocation resource. |
| [`ipamPoolAllocationId`](#renovosolutionscdklibraryawsipamipamallocationpropertyipampoolallocationid)<span title="Required">*</span> | `string` | The ID of the allocation. |

---

##### `allocation`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamAllocation.property.allocation" id="renovosolutionscdklibraryawsipamipamallocationpropertyallocation"></a>

```typescript
public readonly allocation: CfnIPAMAllocation;
```

- *Type:* [`aws-cdk-lib.aws_ec2.CfnIPAMAllocation`](#aws-cdk-lib.aws_ec2.CfnIPAMAllocation)

The underlying IPAM Allocation resource.

---

##### `ipamPoolAllocationId`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamAllocation.property.ipamPoolAllocationId" id="renovosolutionscdklibraryawsipamipamallocationpropertyipampoolallocationid"></a>

```typescript
public readonly ipamPoolAllocationId: string;
```

- *Type:* `string`

The ID of the allocation.

---


### IpamPool <a name="@renovosolutions/cdk-library-aws-ipam.IpamPool" id="renovosolutionscdklibraryawsipamipampool"></a>

An IPAM Pool.

In IPAM, a pool is a collection of contiguous IP addresses CIDRs. Pools enable you to organize your IP addresses according to your routing and security needs. For example, if you have separate routing and security needs for development and production applications, you can create a pool for each.

#### Initializers <a name="@renovosolutions/cdk-library-aws-ipam.IpamPool.Initializer" id="renovosolutionscdklibraryawsipamipampoolinitializer"></a>

```typescript
import { IpamPool } from '@renovosolutions/cdk-library-aws-ipam'

new IpamPool(scope: Construct, id: string, props: IpamPoolProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#renovosolutionscdklibraryawsipamipampoolparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#renovosolutionscdklibraryawsipamipampoolparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#renovosolutionscdklibraryawsipamipampoolparameterprops)<span title="Required">*</span> | [`@renovosolutions/cdk-library-aws-ipam.IpamPoolProps`](#@renovosolutions/cdk-library-aws-ipam.IpamPoolProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamPool.parameter.scope" id="renovosolutionscdklibraryawsipamipampoolparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamPool.parameter.id" id="renovosolutionscdklibraryawsipamipampoolparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamPool.parameter.props" id="renovosolutionscdklibraryawsipamipampoolparameterprops"></a>

- *Type:* [`@renovosolutions/cdk-library-aws-ipam.IpamPoolProps`](#@renovosolutions/cdk-library-aws-ipam.IpamPoolProps)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`provisionCidr`](#renovosolutionscdklibraryawsipamipampoolprovisioncidr) | Adds a CIDR to the pool. |

---

##### `provisionCidr` <a name="@renovosolutions/cdk-library-aws-ipam.IpamPool.provisionCidr" id="renovosolutionscdklibraryawsipamipampoolprovisioncidr"></a>

```typescript
public provisionCidr(cidr: string)
```

###### `cidr`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamPool.parameter.cidr" id="renovosolutionscdklibraryawsipamipampoolparametercidr"></a>

- *Type:* `string`

The CIDR to add to the pool.

---


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`arn`](#renovosolutionscdklibraryawsipamipampoolpropertyarn)<span title="Required">*</span> | `string` | The ARN of the resulting IPAM Pool resource. |
| [`ipamArn`](#renovosolutionscdklibraryawsipamipampoolpropertyipamarn)<span title="Required">*</span> | `string` | The ARN of the IPAM this pool belongs to. |
| [`ipamPoolId`](#renovosolutionscdklibraryawsipamipampoolpropertyipampoolid)<span title="Required">*</span> | `string` | The ID of the resulting IPAM Pool resource. |
| [`ipamScopeArn`](#renovosolutionscdklibraryawsipamipampoolpropertyipamscopearn)<span title="Required">*</span> | `string` | The ARN of the scope of the IPAM Pool. |
| [`ipamScopeType`](#renovosolutionscdklibraryawsipamipampoolpropertyipamscopetype)<span title="Required">*</span> | `string` | The IPAM scope type (public or private) of the scope of the IPAM Pool. |
| [`pool`](#renovosolutionscdklibraryawsipamipampoolpropertypool)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.CfnIPAMPool`](#aws-cdk-lib.aws_ec2.CfnIPAMPool) | The underlying IPAM Pool resource. |
| [`poolDepth`](#renovosolutionscdklibraryawsipamipampoolpropertypooldepth)<span title="Required">*</span> | `number` | The depth of pools in your IPAM pool. |
| [`provisionedCidrs`](#renovosolutionscdklibraryawsipamipampoolpropertyprovisionedcidrs)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.CfnIPAMPool.ProvisionedCidrProperty`](#aws-cdk-lib.aws_ec2.CfnIPAMPool.ProvisionedCidrProperty)[] | The provisioned CIDRs for this pool. |
| [`state`](#renovosolutionscdklibraryawsipamipampoolpropertystate)<span title="Required">*</span> | `string` | The state of the IPAM pool. |
| [`stateMessage`](#renovosolutionscdklibraryawsipamipampoolpropertystatemessage)<span title="Required">*</span> | `string` | A message related to the failed creation of an IPAM pool. |
| [`allocationDefaultNetmaskLength`](#renovosolutionscdklibraryawsipamipampoolpropertyallocationdefaultnetmasklength) | `number` | The default netmask length for allocations added to this pool. |

---

##### `arn`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamPool.property.arn" id="renovosolutionscdklibraryawsipamipampoolpropertyarn"></a>

```typescript
public readonly arn: string;
```

- *Type:* `string`

The ARN of the resulting IPAM Pool resource.

---

##### `ipamArn`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamPool.property.ipamArn" id="renovosolutionscdklibraryawsipamipampoolpropertyipamarn"></a>

```typescript
public readonly ipamArn: string;
```

- *Type:* `string`

The ARN of the IPAM this pool belongs to.

---

##### `ipamPoolId`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamPool.property.ipamPoolId" id="renovosolutionscdklibraryawsipamipampoolpropertyipampoolid"></a>

```typescript
public readonly ipamPoolId: string;
```

- *Type:* `string`

The ID of the resulting IPAM Pool resource.

---

##### `ipamScopeArn`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamPool.property.ipamScopeArn" id="renovosolutionscdklibraryawsipamipampoolpropertyipamscopearn"></a>

```typescript
public readonly ipamScopeArn: string;
```

- *Type:* `string`

The ARN of the scope of the IPAM Pool.

---

##### `ipamScopeType`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamPool.property.ipamScopeType" id="renovosolutionscdklibraryawsipamipampoolpropertyipamscopetype"></a>

```typescript
public readonly ipamScopeType: string;
```

- *Type:* `string`

The IPAM scope type (public or private) of the scope of the IPAM Pool.

---

##### `pool`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamPool.property.pool" id="renovosolutionscdklibraryawsipamipampoolpropertypool"></a>

```typescript
public readonly pool: CfnIPAMPool;
```

- *Type:* [`aws-cdk-lib.aws_ec2.CfnIPAMPool`](#aws-cdk-lib.aws_ec2.CfnIPAMPool)

The underlying IPAM Pool resource.

---

##### `poolDepth`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamPool.property.poolDepth" id="renovosolutionscdklibraryawsipamipampoolpropertypooldepth"></a>

```typescript
public readonly poolDepth: number;
```

- *Type:* `number`

The depth of pools in your IPAM pool.

---

##### `provisionedCidrs`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamPool.property.provisionedCidrs" id="renovosolutionscdklibraryawsipamipampoolpropertyprovisionedcidrs"></a>

```typescript
public readonly provisionedCidrs: ProvisionedCidrProperty[];
```

- *Type:* [`aws-cdk-lib.aws_ec2.CfnIPAMPool.ProvisionedCidrProperty`](#aws-cdk-lib.aws_ec2.CfnIPAMPool.ProvisionedCidrProperty)[]

The provisioned CIDRs for this pool.

---

##### `state`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamPool.property.state" id="renovosolutionscdklibraryawsipamipampoolpropertystate"></a>

```typescript
public readonly state: string;
```

- *Type:* `string`

The state of the IPAM pool.

---

##### `stateMessage`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamPool.property.stateMessage" id="renovosolutionscdklibraryawsipamipampoolpropertystatemessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* `string`

A message related to the failed creation of an IPAM pool.

---

##### `allocationDefaultNetmaskLength`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamPool.property.allocationDefaultNetmaskLength" id="renovosolutionscdklibraryawsipamipampoolpropertyallocationdefaultnetmasklength"></a>

```typescript
public readonly allocationDefaultNetmaskLength: number;
```

- *Type:* `number`

The default netmask length for allocations added to this pool.

---


### IpamScope <a name="@renovosolutions/cdk-library-aws-ipam.IpamScope" id="renovosolutionscdklibraryawsipamipamscope"></a>

An IPAM Scope.

In IPAM, a scope is the highest-level container within IPAM. An IPAM contains two default scopes. Each scope represents the IP space for a single network. The private scope is intended for all private IP address space. The public scope is intended for all public IP address space. Scopes enable you to reuse IP addresses across multiple unconnected networks without causing IP address overlap or conflict.

#### Initializers <a name="@renovosolutions/cdk-library-aws-ipam.IpamScope.Initializer" id="renovosolutionscdklibraryawsipamipamscopeinitializer"></a>

```typescript
import { IpamScope } from '@renovosolutions/cdk-library-aws-ipam'

new IpamScope(scope: Construct, id: string, props: IpamScopeProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#renovosolutionscdklibraryawsipamipamscopeparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#renovosolutionscdklibraryawsipamipamscopeparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#renovosolutionscdklibraryawsipamipamscopeparameterprops)<span title="Required">*</span> | [`@renovosolutions/cdk-library-aws-ipam.IpamScopeProps`](#@renovosolutions/cdk-library-aws-ipam.IpamScopeProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamScope.parameter.scope" id="renovosolutionscdklibraryawsipamipamscopeparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamScope.parameter.id" id="renovosolutionscdklibraryawsipamipamscopeparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamScope.parameter.props" id="renovosolutionscdklibraryawsipamipamscopeparameterprops"></a>

- *Type:* [`@renovosolutions/cdk-library-aws-ipam.IpamScopeProps`](#@renovosolutions/cdk-library-aws-ipam.IpamScopeProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`arn`](#renovosolutionscdklibraryawsipamipamscopepropertyarn)<span title="Required">*</span> | `string` | The ARN of the resulting IPAM Scope resource. |
| [`ipamArn`](#renovosolutionscdklibraryawsipamipamscopepropertyipamarn)<span title="Required">*</span> | `string` | The ARN of the IPAM this scope belongs to. |
| [`ipamScopeId`](#renovosolutionscdklibraryawsipamipamscopepropertyipamscopeid)<span title="Required">*</span> | `string` | The ID of the resulting IPAM Scope resource. |
| [`isDefault`](#renovosolutionscdklibraryawsipamipamscopepropertyisdefault)<span title="Required">*</span> | [`aws-cdk-lib.IResolvable`](#aws-cdk-lib.IResolvable) | Indicates whether the scope is the default scope for the IPAM. |
| [`poolCount`](#renovosolutionscdklibraryawsipamipamscopepropertypoolcount)<span title="Required">*</span> | `number` | The number of pools in the scope. |
| [`scope`](#renovosolutionscdklibraryawsipamipamscopepropertyscope)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.CfnIPAMScope`](#aws-cdk-lib.aws_ec2.CfnIPAMScope) | The underlying IPAM Scope resource. |

---

##### `arn`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamScope.property.arn" id="renovosolutionscdklibraryawsipamipamscopepropertyarn"></a>

```typescript
public readonly arn: string;
```

- *Type:* `string`

The ARN of the resulting IPAM Scope resource.

---

##### `ipamArn`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamScope.property.ipamArn" id="renovosolutionscdklibraryawsipamipamscopepropertyipamarn"></a>

```typescript
public readonly ipamArn: string;
```

- *Type:* `string`

The ARN of the IPAM this scope belongs to.

---

##### `ipamScopeId`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamScope.property.ipamScopeId" id="renovosolutionscdklibraryawsipamipamscopepropertyipamscopeid"></a>

```typescript
public readonly ipamScopeId: string;
```

- *Type:* `string`

The ID of the resulting IPAM Scope resource.

---

##### `isDefault`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamScope.property.isDefault" id="renovosolutionscdklibraryawsipamipamscopepropertyisdefault"></a>

```typescript
public readonly isDefault: IResolvable;
```

- *Type:* [`aws-cdk-lib.IResolvable`](#aws-cdk-lib.IResolvable)

Indicates whether the scope is the default scope for the IPAM.

---

##### `poolCount`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamScope.property.poolCount" id="renovosolutionscdklibraryawsipamipamscopepropertypoolcount"></a>

```typescript
public readonly poolCount: number;
```

- *Type:* `number`

The number of pools in the scope.

---

##### `scope`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamScope.property.scope" id="renovosolutionscdklibraryawsipamipamscopepropertyscope"></a>

```typescript
public readonly scope: CfnIPAMScope;
```

- *Type:* [`aws-cdk-lib.aws_ec2.CfnIPAMScope`](#aws-cdk-lib.aws_ec2.CfnIPAMScope)

The underlying IPAM Scope resource.

---


## Structs <a name="Structs" id="structs"></a>

### IpamAllocationProps <a name="@renovosolutions/cdk-library-aws-ipam.IpamAllocationProps" id="renovosolutionscdklibraryawsipamipamallocationprops"></a>

Properties of an IPAM Allocation.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { IpamAllocationProps } from '@renovosolutions/cdk-library-aws-ipam'

const ipamAllocationProps: IpamAllocationProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`ipamPool`](#renovosolutionscdklibraryawsipamipamallocationpropspropertyipampool)<span title="Required">*</span> | [`@renovosolutions/cdk-library-aws-ipam.IpamPool`](#@renovosolutions/cdk-library-aws-ipam.IpamPool) | The IPAM pool from which you would like to allocate a CIDR. |
| [`cidr`](#renovosolutionscdklibraryawsipamipamallocationpropspropertycidr) | `string` | The CIDR you would like to allocate from the IPAM pool. Note the following:. |
| [`description`](#renovosolutionscdklibraryawsipamipamallocationpropspropertydescription) | `string` | A description of the pool allocation. |
| [`netmaskLength`](#renovosolutionscdklibraryawsipamipamallocationpropspropertynetmasklength) | `number` | The netmask length of the CIDR you would like to allocate from the IPAM pool. Note the following:. |

---

##### `ipamPool`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamAllocationProps.property.ipamPool" id="renovosolutionscdklibraryawsipamipamallocationpropspropertyipampool"></a>

```typescript
public readonly ipamPool: IpamPool;
```

- *Type:* [`@renovosolutions/cdk-library-aws-ipam.IpamPool`](#@renovosolutions/cdk-library-aws-ipam.IpamPool)

The IPAM pool from which you would like to allocate a CIDR.

---

##### `cidr`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamAllocationProps.property.cidr" id="renovosolutionscdklibraryawsipamipamallocationpropspropertycidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* `string`

The CIDR you would like to allocate from the IPAM pool. Note the following:.

If there is no DefaultNetmaskLength allocation rule set on the pool, you must specify either the NetmaskLength or the CIDR.  If the DefaultNetmaskLength allocation rule is set on the pool, you can specify either the NetmaskLength or the CIDR and the DefaultNetmaskLength allocation rule will be ignored.

---

##### `description`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamAllocationProps.property.description" id="renovosolutionscdklibraryawsipamipamallocationpropspropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

A description of the pool allocation.

---

##### `netmaskLength`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamAllocationProps.property.netmaskLength" id="renovosolutionscdklibraryawsipamipamallocationpropspropertynetmasklength"></a>

```typescript
public readonly netmaskLength: number;
```

- *Type:* `number`

The netmask length of the CIDR you would like to allocate from the IPAM pool. Note the following:.

If there is no DefaultNetmaskLength allocation rule set on the pool, you must specify either the NetmaskLength or the CIDR.  If the DefaultNetmaskLength allocation rule is set on the pool, you can specify either the NetmaskLength or the CIDR and the DefaultNetmaskLength allocation rule will be ignored.

---

### IpamPoolProps <a name="@renovosolutions/cdk-library-aws-ipam.IpamPoolProps" id="renovosolutionscdklibraryawsipamipampoolprops"></a>

Properties of an IPAM Pool.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { IpamPoolProps } from '@renovosolutions/cdk-library-aws-ipam'

const ipamPoolProps: IpamPoolProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`addressFamily`](#renovosolutionscdklibraryawsipamipampoolpropspropertyaddressfamily)<span title="Required">*</span> | [`@renovosolutions/cdk-library-aws-ipam.IpamPoolAddressFamily`](#@renovosolutions/cdk-library-aws-ipam.IpamPoolAddressFamily) | The address family of the pool, either IPv4 or IPv6. |
| [`ipamScopeId`](#renovosolutionscdklibraryawsipamipampoolpropspropertyipamscopeid)<span title="Required">*</span> | `string` | The IPAM scope this pool is associated with. |
| [`allocationDefaultNetmaskLength`](#renovosolutionscdklibraryawsipamipampoolpropspropertyallocationdefaultnetmasklength) | `number` | The default netmask length for allocations added to this pool. |
| [`allocationMaxNetmaskLength`](#renovosolutionscdklibraryawsipamipampoolpropspropertyallocationmaxnetmasklength) | `number` | The maximum netmask length possible for CIDR allocations in this IPAM pool to be compliant. |
| [`allocationMinNetmaskLength`](#renovosolutionscdklibraryawsipamipampoolpropspropertyallocationminnetmasklength) | `number` | The minimum netmask length required for CIDR allocations in this IPAM pool to be compliant. |
| [`allocationResourceTags`](#renovosolutionscdklibraryawsipamipampoolpropspropertyallocationresourcetags) | [`aws-cdk-lib.CfnTag`](#aws-cdk-lib.CfnTag)[] | Tags that are required for resources that use CIDRs from this IPAM pool. |
| [`autoImport`](#renovosolutionscdklibraryawsipamipampoolpropspropertyautoimport) | `boolean` | If selected, IPAM will continuously look for resources within the CIDR range of this pool and automatically import them as allocations into your IPAM. |
| [`description`](#renovosolutionscdklibraryawsipamipampoolpropspropertydescription) | `string` | The description of the pool. |
| [`locale`](#renovosolutionscdklibraryawsipamipampoolpropspropertylocale) | `string` | The locale of the IPAM pool. |
| [`provisionedCidrs`](#renovosolutionscdklibraryawsipamipampoolpropspropertyprovisionedcidrs) | [`aws-cdk-lib.aws_ec2.CfnIPAMPool.ProvisionedCidrProperty`](#aws-cdk-lib.aws_ec2.CfnIPAMPool.ProvisionedCidrProperty)[] | The CIDRs provisioned to the IPAM pool. |
| [`sourceIpamPoolId`](#renovosolutionscdklibraryawsipamipampoolpropspropertysourceipampoolid) | `string` | The ID of the source IPAM pool. |
| [`tags`](#renovosolutionscdklibraryawsipamipampoolpropspropertytags) | [`aws-cdk-lib.CfnTag`](#aws-cdk-lib.CfnTag)[] | The key/value combination of tags to assign to the resource. |

---

##### `addressFamily`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.addressFamily" id="renovosolutionscdklibraryawsipamipampoolpropspropertyaddressfamily"></a>

```typescript
public readonly addressFamily: IpamPoolAddressFamily;
```

- *Type:* [`@renovosolutions/cdk-library-aws-ipam.IpamPoolAddressFamily`](#@renovosolutions/cdk-library-aws-ipam.IpamPoolAddressFamily)

The address family of the pool, either IPv4 or IPv6.

---

##### `ipamScopeId`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.ipamScopeId" id="renovosolutionscdklibraryawsipamipampoolpropspropertyipamscopeid"></a>

```typescript
public readonly ipamScopeId: string;
```

- *Type:* `string`

The IPAM scope this pool is associated with.

---

##### `allocationDefaultNetmaskLength`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.allocationDefaultNetmaskLength" id="renovosolutionscdklibraryawsipamipampoolpropspropertyallocationdefaultnetmasklength"></a>

```typescript
public readonly allocationDefaultNetmaskLength: number;
```

- *Type:* `number`

The default netmask length for allocations added to this pool.

If, for example, the CIDR assigned to this pool is 10.0.0.0/8 and you enter 16 here, new allocations will default to 10.0.0.0/16.

---

##### `allocationMaxNetmaskLength`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.allocationMaxNetmaskLength" id="renovosolutionscdklibraryawsipamipampoolpropspropertyallocationmaxnetmasklength"></a>

```typescript
public readonly allocationMaxNetmaskLength: number;
```

- *Type:* `number`

The maximum netmask length possible for CIDR allocations in this IPAM pool to be compliant.

The maximum netmask length must be greater than the minimum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are 0 - 128.

---

##### `allocationMinNetmaskLength`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.allocationMinNetmaskLength" id="renovosolutionscdklibraryawsipamipampoolpropspropertyallocationminnetmasklength"></a>

```typescript
public readonly allocationMinNetmaskLength: number;
```

- *Type:* `number`

The minimum netmask length required for CIDR allocations in this IPAM pool to be compliant.

The minimum netmask length must be less than the maximum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are 0 - 128.

---

##### `allocationResourceTags`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.allocationResourceTags" id="renovosolutionscdklibraryawsipamipampoolpropspropertyallocationresourcetags"></a>

```typescript
public readonly allocationResourceTags: CfnTag[];
```

- *Type:* [`aws-cdk-lib.CfnTag`](#aws-cdk-lib.CfnTag)[]

Tags that are required for resources that use CIDRs from this IPAM pool.

Resources that do not have these tags will not be allowed to allocate space from the pool. If the resources have their tags changed after they have allocated space or if the allocation tagging requirements are changed on the pool, the resource may be marked as noncompliant.

---

##### `autoImport`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.autoImport" id="renovosolutionscdklibraryawsipamipampoolpropspropertyautoimport"></a>

```typescript
public readonly autoImport: boolean;
```

- *Type:* `boolean`

If selected, IPAM will continuously look for resources within the CIDR range of this pool and automatically import them as allocations into your IPAM.

The CIDRs that will be allocated for these resources must not already be allocated to other resources in order for the import to succeed. IPAM will import a CIDR regardless of its compliance with the pool's allocation rules, so a resource might be imported and subsequently marked as noncompliant. If IPAM discovers multiple CIDRs that overlap, IPAM will import the largest CIDR only. If IPAM discovers multiple CIDRs with matching CIDRs, IPAM will randomly import one of them only.  A locale must be set on the pool for this feature to work.

---

##### `description`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.description" id="renovosolutionscdklibraryawsipamipampoolpropspropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The description of the pool.

---

##### `locale`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.locale" id="renovosolutionscdklibraryawsipamipampoolpropspropertylocale"></a>

```typescript
public readonly locale: string;
```

- *Type:* `string`

The locale of the IPAM pool.

In IPAM, the locale is the AWS Region where you want to make an IPAM pool available for allocations.Only resources in the same Region as the locale of the pool can get IP address allocations from the pool. You can only allocate a CIDR for a VPC, for example, from an IPAM pool that shares a locale with the VPC’s Region. Note that once you choose a Locale for a pool, you cannot modify it. If you choose an AWS Region for locale that has not been configured as an operating Region for the IPAM, you'll get an error.

---

##### `provisionedCidrs`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.provisionedCidrs" id="renovosolutionscdklibraryawsipamipampoolpropspropertyprovisionedcidrs"></a>

```typescript
public readonly provisionedCidrs: ProvisionedCidrProperty[];
```

- *Type:* [`aws-cdk-lib.aws_ec2.CfnIPAMPool.ProvisionedCidrProperty`](#aws-cdk-lib.aws_ec2.CfnIPAMPool.ProvisionedCidrProperty)[]

The CIDRs provisioned to the IPAM pool.

A CIDR is a representation of an IP address and its associated network mask (or netmask) and refers to a range of IP addresses

---

##### `sourceIpamPoolId`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.sourceIpamPoolId" id="renovosolutionscdklibraryawsipamipampoolpropspropertysourceipampoolid"></a>

```typescript
public readonly sourceIpamPoolId: string;
```

- *Type:* `string`

The ID of the source IPAM pool.

You can use this option to create an IPAM pool within an existing source pool.

---

##### `tags`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.tags" id="renovosolutionscdklibraryawsipamipampoolpropspropertytags"></a>

```typescript
public readonly tags: CfnTag[];
```

- *Type:* [`aws-cdk-lib.CfnTag`](#aws-cdk-lib.CfnTag)[]

The key/value combination of tags to assign to the resource.

---

### IpamProps <a name="@renovosolutions/cdk-library-aws-ipam.IpamProps" id="renovosolutionscdklibraryawsipamipamprops"></a>

Properties of the IPAM.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { IpamProps } from '@renovosolutions/cdk-library-aws-ipam'

const ipamProps: IpamProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`description`](#renovosolutionscdklibraryawsipamipampropspropertydescription) | `string` | The description for the IPAM. |
| [`operatingRegions`](#renovosolutionscdklibraryawsipamipampropspropertyoperatingregions) | `string`[] | The operating Regions for an IPAM. |
| [`tags`](#renovosolutionscdklibraryawsipamipampropspropertytags) | [`aws-cdk-lib.CfnTag`](#aws-cdk-lib.CfnTag)[] | The key/value combination of tags to assign to the resource. |

---

##### `description`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamProps.property.description" id="renovosolutionscdklibraryawsipamipampropspropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The description for the IPAM.

---

##### `operatingRegions`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamProps.property.operatingRegions" id="renovosolutionscdklibraryawsipamipampropspropertyoperatingregions"></a>

```typescript
public readonly operatingRegions: string[];
```

- *Type:* `string`[]
- *Default:* Stack.of(this).region

The operating Regions for an IPAM.

Operating Regions are AWS Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the AWS Regions you select as operating Regions.  For more information about operating Regions, see Create an IPAM in the Amazon VPC IPAM User Guide.

> https://vpc/latest/ipam/create-ipam.html

---

##### `tags`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamProps.property.tags" id="renovosolutionscdklibraryawsipamipampropspropertytags"></a>

```typescript
public readonly tags: CfnTag[];
```

- *Type:* [`aws-cdk-lib.CfnTag`](#aws-cdk-lib.CfnTag)[]

The key/value combination of tags to assign to the resource.

---

### IpamScopeProps <a name="@renovosolutions/cdk-library-aws-ipam.IpamScopeProps" id="renovosolutionscdklibraryawsipamipamscopeprops"></a>

Properties of an IPAM Scope.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { IpamScopeProps } from '@renovosolutions/cdk-library-aws-ipam'

const ipamScopeProps: IpamScopeProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`ipam`](#renovosolutionscdklibraryawsipamipamscopepropspropertyipam)<span title="Required">*</span> | [`@renovosolutions/cdk-library-aws-ipam.Ipam`](#@renovosolutions/cdk-library-aws-ipam.Ipam) | The IPAM for which you're creating the scope. |
| [`description`](#renovosolutionscdklibraryawsipamipamscopepropspropertydescription) | `string` | The description of the scope. |
| [`tags`](#renovosolutionscdklibraryawsipamipamscopepropspropertytags) | [`aws-cdk-lib.CfnTag`](#aws-cdk-lib.CfnTag)[] | The key/value combination of tags to assign to the resource. |

---

##### `ipam`<sup>Required</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamScopeProps.property.ipam" id="renovosolutionscdklibraryawsipamipamscopepropspropertyipam"></a>

```typescript
public readonly ipam: Ipam;
```

- *Type:* [`@renovosolutions/cdk-library-aws-ipam.Ipam`](#@renovosolutions/cdk-library-aws-ipam.Ipam)

The IPAM for which you're creating the scope.

---

##### `description`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamScopeProps.property.description" id="renovosolutionscdklibraryawsipamipamscopepropspropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The description of the scope.

---

##### `tags`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-aws-ipam.IpamScopeProps.property.tags" id="renovosolutionscdklibraryawsipamipamscopepropspropertytags"></a>

```typescript
public readonly tags: CfnTag[];
```

- *Type:* [`aws-cdk-lib.CfnTag`](#aws-cdk-lib.CfnTag)[]

The key/value combination of tags to assign to the resource.

---



## Enums <a name="Enums" id="enums"></a>

### IpamPoolAddressFamily <a name="IpamPoolAddressFamily" id="ipampooladdressfamily"></a>

| **Name** | **Description** |
| --- | --- |
| [`IPV4`](#renovosolutionscdklibraryawsipamipampooladdressfamilyipv4) | *No description.* |
| [`IPV6`](#renovosolutionscdklibraryawsipamipampooladdressfamilyipv6) | *No description.* |

---

#### `IPV4` <a name="@renovosolutions/cdk-library-aws-ipam.IpamPoolAddressFamily.IPV4" id="renovosolutionscdklibraryawsipamipampooladdressfamilyipv4"></a>

---


#### `IPV6` <a name="@renovosolutions/cdk-library-aws-ipam.IpamPoolAddressFamily.IPV6" id="renovosolutionscdklibraryawsipamipampooladdressfamilyipv6"></a>

---

