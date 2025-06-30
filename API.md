# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ipam <a name="Ipam" id="@renovosolutions/cdk-library-aws-ipam.Ipam"></a>

Creates an IPAM.

IPAM is a VPC feature that you can use to automate your IP address management workflows including
assigning, tracking, troubleshooting, and auditing IP addresses across AWS Regions and accounts
throughout your AWS Organization. For more information, see What is IPAM? in the Amazon VPC IPAM
User Guide.

> [https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html](https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html)

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-library-aws-ipam.Ipam.Initializer"></a>

```typescript
import { Ipam } from '@renovosolutions/cdk-library-aws-ipam'

new Ipam(scope: Construct, id: string, props: IpamProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.Ipam.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.Ipam.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.Ipam.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamProps">IpamProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-aws-ipam.Ipam.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-aws-ipam.Ipam.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-aws-ipam.Ipam.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-aws-ipam.IpamProps">IpamProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.Ipam.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@renovosolutions/cdk-library-aws-ipam.Ipam.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.Ipam.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@renovosolutions/cdk-library-aws-ipam.Ipam.isConstruct"></a>

```typescript
import { Ipam } from '@renovosolutions/cdk-library-aws-ipam'

Ipam.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@renovosolutions/cdk-library-aws-ipam.Ipam.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.Ipam.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.Ipam.property.ipam">ipam</a></code> | <code>aws-cdk-lib.aws_ec2.CfnIPAM</code> | The underlying IPAM resource. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.Ipam.property.ipamId">ipamId</a></code> | <code>string</code> | The ID of the resulting IPAM resource. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.Ipam.property.privateDefaultScopeId">privateDefaultScopeId</a></code> | <code>string</code> | The default private scope ID. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.Ipam.property.publicDefaultScopeId">publicDefaultScopeId</a></code> | <code>string</code> | The default public scope ID. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.Ipam.property.scopeCount">scopeCount</a></code> | <code>number</code> | The number of scopes in this IPAM. |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-aws-ipam.Ipam.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `ipam`<sup>Required</sup> <a name="ipam" id="@renovosolutions/cdk-library-aws-ipam.Ipam.property.ipam"></a>

```typescript
public readonly ipam: CfnIPAM;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnIPAM

The underlying IPAM resource.

---

##### `ipamId`<sup>Required</sup> <a name="ipamId" id="@renovosolutions/cdk-library-aws-ipam.Ipam.property.ipamId"></a>

```typescript
public readonly ipamId: string;
```

- *Type:* string

The ID of the resulting IPAM resource.

---

##### `privateDefaultScopeId`<sup>Required</sup> <a name="privateDefaultScopeId" id="@renovosolutions/cdk-library-aws-ipam.Ipam.property.privateDefaultScopeId"></a>

```typescript
public readonly privateDefaultScopeId: string;
```

- *Type:* string

The default private scope ID.

---

##### `publicDefaultScopeId`<sup>Required</sup> <a name="publicDefaultScopeId" id="@renovosolutions/cdk-library-aws-ipam.Ipam.property.publicDefaultScopeId"></a>

```typescript
public readonly publicDefaultScopeId: string;
```

- *Type:* string

The default public scope ID.

---

##### `scopeCount`<sup>Required</sup> <a name="scopeCount" id="@renovosolutions/cdk-library-aws-ipam.Ipam.property.scopeCount"></a>

```typescript
public readonly scopeCount: number;
```

- *Type:* number

The number of scopes in this IPAM.

---


### IpamAllocation <a name="IpamAllocation" id="@renovosolutions/cdk-library-aws-ipam.IpamAllocation"></a>

An IPAM Allocation.

In IPAM, an allocation is a CIDR assignment from an IPAM pool to another resource or IPAM pool.

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-library-aws-ipam.IpamAllocation.Initializer"></a>

```typescript
import { IpamAllocation } from '@renovosolutions/cdk-library-aws-ipam'

new IpamAllocation(scope: Construct, id: string, props: IpamAllocationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamAllocation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamAllocation.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamAllocation.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamAllocationProps">IpamAllocationProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-aws-ipam.IpamAllocation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-aws-ipam.IpamAllocation.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-aws-ipam.IpamAllocation.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-aws-ipam.IpamAllocationProps">IpamAllocationProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamAllocation.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@renovosolutions/cdk-library-aws-ipam.IpamAllocation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamAllocation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@renovosolutions/cdk-library-aws-ipam.IpamAllocation.isConstruct"></a>

```typescript
import { IpamAllocation } from '@renovosolutions/cdk-library-aws-ipam'

IpamAllocation.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@renovosolutions/cdk-library-aws-ipam.IpamAllocation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamAllocation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamAllocation.property.allocation">allocation</a></code> | <code>aws-cdk-lib.aws_ec2.CfnIPAMAllocation</code> | The underlying IPAM Allocation resource. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamAllocation.property.ipamPoolAllocationId">ipamPoolAllocationId</a></code> | <code>string</code> | The ID of the allocation. |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-aws-ipam.IpamAllocation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `allocation`<sup>Required</sup> <a name="allocation" id="@renovosolutions/cdk-library-aws-ipam.IpamAllocation.property.allocation"></a>

```typescript
public readonly allocation: CfnIPAMAllocation;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnIPAMAllocation

The underlying IPAM Allocation resource.

---

##### `ipamPoolAllocationId`<sup>Required</sup> <a name="ipamPoolAllocationId" id="@renovosolutions/cdk-library-aws-ipam.IpamAllocation.property.ipamPoolAllocationId"></a>

```typescript
public readonly ipamPoolAllocationId: string;
```

- *Type:* string

The ID of the allocation.

---


### IpamPool <a name="IpamPool" id="@renovosolutions/cdk-library-aws-ipam.IpamPool"></a>

An IPAM Pool.

In IPAM, a pool is a collection of contiguous IP addresses CIDRs. Pools enable you to organize your IP addresses
according to your routing and security needs. For example, if you have separate routing and security needs for
development and production applications, you can create a pool for each.

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-library-aws-ipam.IpamPool.Initializer"></a>

```typescript
import { IpamPool } from '@renovosolutions/cdk-library-aws-ipam'

new IpamPool(scope: Construct, id: string, props: IpamPoolProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPool.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPool.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPoolProps">IpamPoolProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-aws-ipam.IpamPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-aws-ipam.IpamPool.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-aws-ipam.IpamPool.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-aws-ipam.IpamPoolProps">IpamPoolProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPool.provisionCidr">provisionCidr</a></code> | Adds a CIDR to the pool. |

---

##### `toString` <a name="toString" id="@renovosolutions/cdk-library-aws-ipam.IpamPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `provisionCidr` <a name="provisionCidr" id="@renovosolutions/cdk-library-aws-ipam.IpamPool.provisionCidr"></a>

```typescript
public provisionCidr(cidr: string): void
```

Adds a CIDR to the pool.

###### `cidr`<sup>Required</sup> <a name="cidr" id="@renovosolutions/cdk-library-aws-ipam.IpamPool.provisionCidr.parameter.cidr"></a>

- *Type:* string

The CIDR to add to the pool.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@renovosolutions/cdk-library-aws-ipam.IpamPool.isConstruct"></a>

```typescript
import { IpamPool } from '@renovosolutions/cdk-library-aws-ipam'

IpamPool.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@renovosolutions/cdk-library-aws-ipam.IpamPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPool.property.arn">arn</a></code> | <code>string</code> | The ARN of the resulting IPAM Pool resource. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPool.property.ipamArn">ipamArn</a></code> | <code>string</code> | The ARN of the IPAM this pool belongs to. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPool.property.ipamPoolId">ipamPoolId</a></code> | <code>string</code> | The ID of the resulting IPAM Pool resource. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPool.property.ipamScopeArn">ipamScopeArn</a></code> | <code>string</code> | The ARN of the scope of the IPAM Pool. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPool.property.ipamScopeType">ipamScopeType</a></code> | <code>string</code> | The IPAM scope type (public or private) of the scope of the IPAM Pool. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPool.property.pool">pool</a></code> | <code>aws-cdk-lib.aws_ec2.CfnIPAMPool</code> | The underlying IPAM Pool resource. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPool.property.poolDepth">poolDepth</a></code> | <code>number</code> | The depth of pools in your IPAM pool. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPool.property.provisionedCidrs">provisionedCidrs</a></code> | <code>aws-cdk-lib.aws_ec2.CfnIPAMPool.ProvisionedCidrProperty[]</code> | The provisioned CIDRs for this pool. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPool.property.state">state</a></code> | <code>string</code> | The state of the IPAM pool. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPool.property.stateMessage">stateMessage</a></code> | <code>string</code> | A message related to the failed creation of an IPAM pool. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPool.property.allocationDefaultNetmaskLength">allocationDefaultNetmaskLength</a></code> | <code>number</code> | The default netmask length for allocations added to this pool. |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-aws-ipam.IpamPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `arn`<sup>Required</sup> <a name="arn" id="@renovosolutions/cdk-library-aws-ipam.IpamPool.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

The ARN of the resulting IPAM Pool resource.

---

##### `ipamArn`<sup>Required</sup> <a name="ipamArn" id="@renovosolutions/cdk-library-aws-ipam.IpamPool.property.ipamArn"></a>

```typescript
public readonly ipamArn: string;
```

- *Type:* string

The ARN of the IPAM this pool belongs to.

---

##### `ipamPoolId`<sup>Required</sup> <a name="ipamPoolId" id="@renovosolutions/cdk-library-aws-ipam.IpamPool.property.ipamPoolId"></a>

```typescript
public readonly ipamPoolId: string;
```

- *Type:* string

The ID of the resulting IPAM Pool resource.

---

##### `ipamScopeArn`<sup>Required</sup> <a name="ipamScopeArn" id="@renovosolutions/cdk-library-aws-ipam.IpamPool.property.ipamScopeArn"></a>

```typescript
public readonly ipamScopeArn: string;
```

- *Type:* string

The ARN of the scope of the IPAM Pool.

---

##### `ipamScopeType`<sup>Required</sup> <a name="ipamScopeType" id="@renovosolutions/cdk-library-aws-ipam.IpamPool.property.ipamScopeType"></a>

```typescript
public readonly ipamScopeType: string;
```

- *Type:* string

The IPAM scope type (public or private) of the scope of the IPAM Pool.

---

##### `pool`<sup>Required</sup> <a name="pool" id="@renovosolutions/cdk-library-aws-ipam.IpamPool.property.pool"></a>

```typescript
public readonly pool: CfnIPAMPool;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnIPAMPool

The underlying IPAM Pool resource.

---

##### `poolDepth`<sup>Required</sup> <a name="poolDepth" id="@renovosolutions/cdk-library-aws-ipam.IpamPool.property.poolDepth"></a>

```typescript
public readonly poolDepth: number;
```

- *Type:* number

The depth of pools in your IPAM pool.

---

##### `provisionedCidrs`<sup>Required</sup> <a name="provisionedCidrs" id="@renovosolutions/cdk-library-aws-ipam.IpamPool.property.provisionedCidrs"></a>

```typescript
public readonly provisionedCidrs: ProvisionedCidrProperty[];
```

- *Type:* aws-cdk-lib.aws_ec2.CfnIPAMPool.ProvisionedCidrProperty[]

The provisioned CIDRs for this pool.

---

##### `state`<sup>Required</sup> <a name="state" id="@renovosolutions/cdk-library-aws-ipam.IpamPool.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

The state of the IPAM pool.

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@renovosolutions/cdk-library-aws-ipam.IpamPool.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

A message related to the failed creation of an IPAM pool.

---

##### `allocationDefaultNetmaskLength`<sup>Optional</sup> <a name="allocationDefaultNetmaskLength" id="@renovosolutions/cdk-library-aws-ipam.IpamPool.property.allocationDefaultNetmaskLength"></a>

```typescript
public readonly allocationDefaultNetmaskLength: number;
```

- *Type:* number

The default netmask length for allocations added to this pool.

---


### IpamScope <a name="IpamScope" id="@renovosolutions/cdk-library-aws-ipam.IpamScope"></a>

An IPAM Scope.

In IPAM, a scope is the highest-level container within IPAM. An IPAM contains two default scopes.
Each scope represents the IP space for a single network. The private scope is intended for all private
IP address space. The public scope is intended for all public IP address space. Scopes enable you to
reuse IP addresses across multiple unconnected networks without causing IP address overlap or conflict.

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-library-aws-ipam.IpamScope.Initializer"></a>

```typescript
import { IpamScope } from '@renovosolutions/cdk-library-aws-ipam'

new IpamScope(scope: Construct, id: string, props: IpamScopeProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamScope.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamScope.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamScope.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamScopeProps">IpamScopeProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-aws-ipam.IpamScope.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-aws-ipam.IpamScope.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-aws-ipam.IpamScope.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-aws-ipam.IpamScopeProps">IpamScopeProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamScope.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@renovosolutions/cdk-library-aws-ipam.IpamScope.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamScope.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@renovosolutions/cdk-library-aws-ipam.IpamScope.isConstruct"></a>

```typescript
import { IpamScope } from '@renovosolutions/cdk-library-aws-ipam'

IpamScope.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@renovosolutions/cdk-library-aws-ipam.IpamScope.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamScope.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamScope.property.arn">arn</a></code> | <code>string</code> | The ARN of the resulting IPAM Scope resource. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamScope.property.ipamArn">ipamArn</a></code> | <code>string</code> | The ARN of the IPAM this scope belongs to. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamScope.property.ipamScopeId">ipamScopeId</a></code> | <code>string</code> | The ID of the resulting IPAM Scope resource. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamScope.property.isDefault">isDefault</a></code> | <code>aws-cdk-lib.IResolvable</code> | Indicates whether the scope is the default scope for the IPAM. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamScope.property.poolCount">poolCount</a></code> | <code>number</code> | The number of pools in the scope. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamScope.property.scope">scope</a></code> | <code>aws-cdk-lib.aws_ec2.CfnIPAMScope</code> | The underlying IPAM Scope resource. |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-aws-ipam.IpamScope.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `arn`<sup>Required</sup> <a name="arn" id="@renovosolutions/cdk-library-aws-ipam.IpamScope.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

The ARN of the resulting IPAM Scope resource.

---

##### `ipamArn`<sup>Required</sup> <a name="ipamArn" id="@renovosolutions/cdk-library-aws-ipam.IpamScope.property.ipamArn"></a>

```typescript
public readonly ipamArn: string;
```

- *Type:* string

The ARN of the IPAM this scope belongs to.

---

##### `ipamScopeId`<sup>Required</sup> <a name="ipamScopeId" id="@renovosolutions/cdk-library-aws-ipam.IpamScope.property.ipamScopeId"></a>

```typescript
public readonly ipamScopeId: string;
```

- *Type:* string

The ID of the resulting IPAM Scope resource.

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@renovosolutions/cdk-library-aws-ipam.IpamScope.property.isDefault"></a>

```typescript
public readonly isDefault: IResolvable;
```

- *Type:* aws-cdk-lib.IResolvable

Indicates whether the scope is the default scope for the IPAM.

---

##### `poolCount`<sup>Required</sup> <a name="poolCount" id="@renovosolutions/cdk-library-aws-ipam.IpamScope.property.poolCount"></a>

```typescript
public readonly poolCount: number;
```

- *Type:* number

The number of pools in the scope.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-aws-ipam.IpamScope.property.scope"></a>

```typescript
public readonly scope: CfnIPAMScope;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnIPAMScope

The underlying IPAM Scope resource.

---


## Structs <a name="Structs" id="Structs"></a>

### IpamAllocationProps <a name="IpamAllocationProps" id="@renovosolutions/cdk-library-aws-ipam.IpamAllocationProps"></a>

Properties of an IPAM Allocation.

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-aws-ipam.IpamAllocationProps.Initializer"></a>

```typescript
import { IpamAllocationProps } from '@renovosolutions/cdk-library-aws-ipam'

const ipamAllocationProps: IpamAllocationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamAllocationProps.property.ipamPool">ipamPool</a></code> | <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPool">IpamPool</a></code> | The IPAM pool from which you would like to allocate a CIDR. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamAllocationProps.property.cidr">cidr</a></code> | <code>string</code> | The CIDR you would like to allocate from the IPAM pool. Note the following:. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamAllocationProps.property.description">description</a></code> | <code>string</code> | A description of the pool allocation. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamAllocationProps.property.netmaskLength">netmaskLength</a></code> | <code>number</code> | The netmask length of the CIDR you would like to allocate from the IPAM pool. Note the following:. |

---

##### `ipamPool`<sup>Required</sup> <a name="ipamPool" id="@renovosolutions/cdk-library-aws-ipam.IpamAllocationProps.property.ipamPool"></a>

```typescript
public readonly ipamPool: IpamPool;
```

- *Type:* <a href="#@renovosolutions/cdk-library-aws-ipam.IpamPool">IpamPool</a>

The IPAM pool from which you would like to allocate a CIDR.

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@renovosolutions/cdk-library-aws-ipam.IpamAllocationProps.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

The CIDR you would like to allocate from the IPAM pool. Note the following:.

If there is no DefaultNetmaskLength allocation rule set on the pool, you must
specify either the NetmaskLength or the CIDR.

If the DefaultNetmaskLength allocation rule is set on the pool, you can specify
either the NetmaskLength or the CIDR and the DefaultNetmaskLength allocation rule
will be ignored.

---

##### `description`<sup>Optional</sup> <a name="description" id="@renovosolutions/cdk-library-aws-ipam.IpamAllocationProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the pool allocation.

---

##### `netmaskLength`<sup>Optional</sup> <a name="netmaskLength" id="@renovosolutions/cdk-library-aws-ipam.IpamAllocationProps.property.netmaskLength"></a>

```typescript
public readonly netmaskLength: number;
```

- *Type:* number

The netmask length of the CIDR you would like to allocate from the IPAM pool. Note the following:.

If there is no DefaultNetmaskLength allocation rule set on the pool, you must specify either the
NetmaskLength or the CIDR.

If the DefaultNetmaskLength allocation rule is set on the pool, you can specify either the
NetmaskLength or the CIDR and the DefaultNetmaskLength allocation rule will be ignored.

---

### IpamPoolProps <a name="IpamPoolProps" id="@renovosolutions/cdk-library-aws-ipam.IpamPoolProps"></a>

Properties of an IPAM Pool.

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.Initializer"></a>

```typescript
import { IpamPoolProps } from '@renovosolutions/cdk-library-aws-ipam'

const ipamPoolProps: IpamPoolProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.addressFamily">addressFamily</a></code> | <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPoolAddressFamily">IpamPoolAddressFamily</a></code> | The address family of the pool, either IPv4 or IPv6. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.ipamScopeId">ipamScopeId</a></code> | <code>string</code> | The IPAM scope this pool is associated with. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.allocationDefaultNetmaskLength">allocationDefaultNetmaskLength</a></code> | <code>number</code> | The default netmask length for allocations added to this pool. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.allocationMaxNetmaskLength">allocationMaxNetmaskLength</a></code> | <code>number</code> | The maximum netmask length possible for CIDR allocations in this IPAM pool to be compliant. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.allocationMinNetmaskLength">allocationMinNetmaskLength</a></code> | <code>number</code> | The minimum netmask length required for CIDR allocations in this IPAM pool to be compliant. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.allocationResourceTags">allocationResourceTags</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | Tags that are required for resources that use CIDRs from this IPAM pool. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.autoImport">autoImport</a></code> | <code>boolean</code> | If selected, IPAM will continuously look for resources within the CIDR range of this pool and automatically import them as allocations into your IPAM. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.description">description</a></code> | <code>string</code> | The description of the pool. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.locale">locale</a></code> | <code>string</code> | The locale of the IPAM pool. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.provisionedCidrs">provisionedCidrs</a></code> | <code>aws-cdk-lib.aws_ec2.CfnIPAMPool.ProvisionedCidrProperty[]</code> | The CIDRs provisioned to the IPAM pool. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.sourceIpamPoolId">sourceIpamPoolId</a></code> | <code>string</code> | The ID of the source IPAM pool. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.tags">tags</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | The key/value combination of tags to assign to the resource. |

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.addressFamily"></a>

```typescript
public readonly addressFamily: IpamPoolAddressFamily;
```

- *Type:* <a href="#@renovosolutions/cdk-library-aws-ipam.IpamPoolAddressFamily">IpamPoolAddressFamily</a>

The address family of the pool, either IPv4 or IPv6.

---

##### `ipamScopeId`<sup>Required</sup> <a name="ipamScopeId" id="@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.ipamScopeId"></a>

```typescript
public readonly ipamScopeId: string;
```

- *Type:* string

The IPAM scope this pool is associated with.

---

##### `allocationDefaultNetmaskLength`<sup>Optional</sup> <a name="allocationDefaultNetmaskLength" id="@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.allocationDefaultNetmaskLength"></a>

```typescript
public readonly allocationDefaultNetmaskLength: number;
```

- *Type:* number

The default netmask length for allocations added to this pool.

If, for example, the CIDR assigned to this pool is 10.0.0.0/8 and you enter 16 here,
new allocations will default to 10.0.0.0/16.

---

##### `allocationMaxNetmaskLength`<sup>Optional</sup> <a name="allocationMaxNetmaskLength" id="@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.allocationMaxNetmaskLength"></a>

```typescript
public readonly allocationMaxNetmaskLength: number;
```

- *Type:* number

The maximum netmask length possible for CIDR allocations in this IPAM pool to be compliant.

The maximum netmask length must be greater than the minimum netmask length.
Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are 0 - 128.

---

##### `allocationMinNetmaskLength`<sup>Optional</sup> <a name="allocationMinNetmaskLength" id="@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.allocationMinNetmaskLength"></a>

```typescript
public readonly allocationMinNetmaskLength: number;
```

- *Type:* number

The minimum netmask length required for CIDR allocations in this IPAM pool to be compliant.

The minimum netmask length must be less than the maximum netmask length.
Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are 0 - 128.

---

##### `allocationResourceTags`<sup>Optional</sup> <a name="allocationResourceTags" id="@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.allocationResourceTags"></a>

```typescript
public readonly allocationResourceTags: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]

Tags that are required for resources that use CIDRs from this IPAM pool.

Resources that do not have these tags will not be allowed to allocate space from the pool.
If the resources have their tags changed after they have allocated space or if the allocation
tagging requirements are changed on the pool, the resource may be marked as noncompliant.

---

##### `autoImport`<sup>Optional</sup> <a name="autoImport" id="@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.autoImport"></a>

```typescript
public readonly autoImport: boolean;
```

- *Type:* boolean

If selected, IPAM will continuously look for resources within the CIDR range of this pool and automatically import them as allocations into your IPAM.

The CIDRs that will be allocated for these resources must not already be allocated
to other resources in order for the import to succeed. IPAM will import a CIDR regardless of its compliance with the
pool's allocation rules, so a resource might be imported and subsequently marked as noncompliant. If IPAM discovers
multiple CIDRs that overlap, IPAM will import the largest CIDR only. If IPAM discovers multiple CIDRs with matching
CIDRs, IPAM will randomly import one of them only.

A locale must be set on the pool for this feature to work.

---

##### `description`<sup>Optional</sup> <a name="description" id="@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the pool.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

The locale of the IPAM pool.

In IPAM, the locale is the AWS Region where you want to make an IPAM pool available
for allocations.Only resources in the same Region as the locale of the pool can get IP address allocations from the pool.
You can only allocate a CIDR for a VPC, for example, from an IPAM pool that shares a locale with the VPC’s Region.
Note that once you choose a Locale for a pool, you cannot modify it. If you choose an AWS Region for locale that has
not been configured as an operating Region for the IPAM, you'll get an error.

---

##### `provisionedCidrs`<sup>Optional</sup> <a name="provisionedCidrs" id="@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.provisionedCidrs"></a>

```typescript
public readonly provisionedCidrs: ProvisionedCidrProperty[];
```

- *Type:* aws-cdk-lib.aws_ec2.CfnIPAMPool.ProvisionedCidrProperty[]

The CIDRs provisioned to the IPAM pool.

A CIDR is a representation of an IP address and its associated network mask
(or netmask) and refers to a range of IP addresses

---

##### `sourceIpamPoolId`<sup>Optional</sup> <a name="sourceIpamPoolId" id="@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.sourceIpamPoolId"></a>

```typescript
public readonly sourceIpamPoolId: string;
```

- *Type:* string

The ID of the source IPAM pool.

You can use this option to create an IPAM pool within an existing source pool.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@renovosolutions/cdk-library-aws-ipam.IpamPoolProps.property.tags"></a>

```typescript
public readonly tags: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]

The key/value combination of tags to assign to the resource.

---

### IpamProps <a name="IpamProps" id="@renovosolutions/cdk-library-aws-ipam.IpamProps"></a>

Properties of the IPAM.

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-aws-ipam.IpamProps.Initializer"></a>

```typescript
import { IpamProps } from '@renovosolutions/cdk-library-aws-ipam'

const ipamProps: IpamProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamProps.property.description">description</a></code> | <code>string</code> | The description for the IPAM. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamProps.property.operatingRegions">operatingRegions</a></code> | <code>string[]</code> | The operating Regions for an IPAM. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamProps.property.tags">tags</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | The key/value combination of tags to assign to the resource. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@renovosolutions/cdk-library-aws-ipam.IpamProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description for the IPAM.

---

##### `operatingRegions`<sup>Optional</sup> <a name="operatingRegions" id="@renovosolutions/cdk-library-aws-ipam.IpamProps.property.operatingRegions"></a>

```typescript
public readonly operatingRegions: string[];
```

- *Type:* string[]
- *Default:* Stack.of(this).region

The operating Regions for an IPAM.

Operating Regions are AWS Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only
discovers and monitors resources in the AWS Regions you select as operating Regions.

For more information about operating Regions, see Create an IPAM in the Amazon VPC IPAM User Guide.

> [https://vpc/latest/ipam/create-ipam.html](https://vpc/latest/ipam/create-ipam.html)

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@renovosolutions/cdk-library-aws-ipam.IpamProps.property.tags"></a>

```typescript
public readonly tags: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]

The key/value combination of tags to assign to the resource.

---

### IpamScopeProps <a name="IpamScopeProps" id="@renovosolutions/cdk-library-aws-ipam.IpamScopeProps"></a>

Properties of an IPAM Scope.

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-aws-ipam.IpamScopeProps.Initializer"></a>

```typescript
import { IpamScopeProps } from '@renovosolutions/cdk-library-aws-ipam'

const ipamScopeProps: IpamScopeProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamScopeProps.property.ipam">ipam</a></code> | <code><a href="#@renovosolutions/cdk-library-aws-ipam.Ipam">Ipam</a></code> | The IPAM for which you're creating the scope. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamScopeProps.property.description">description</a></code> | <code>string</code> | The description of the scope. |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamScopeProps.property.tags">tags</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | The key/value combination of tags to assign to the resource. |

---

##### `ipam`<sup>Required</sup> <a name="ipam" id="@renovosolutions/cdk-library-aws-ipam.IpamScopeProps.property.ipam"></a>

```typescript
public readonly ipam: Ipam;
```

- *Type:* <a href="#@renovosolutions/cdk-library-aws-ipam.Ipam">Ipam</a>

The IPAM for which you're creating the scope.

---

##### `description`<sup>Optional</sup> <a name="description" id="@renovosolutions/cdk-library-aws-ipam.IpamScopeProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the scope.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@renovosolutions/cdk-library-aws-ipam.IpamScopeProps.property.tags"></a>

```typescript
public readonly tags: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]

The key/value combination of tags to assign to the resource.

---



## Enums <a name="Enums" id="Enums"></a>

### IpamPoolAddressFamily <a name="IpamPoolAddressFamily" id="@renovosolutions/cdk-library-aws-ipam.IpamPoolAddressFamily"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPoolAddressFamily.IPV4">IPV4</a></code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-aws-ipam.IpamPoolAddressFamily.IPV6">IPV6</a></code> | *No description.* |

---

##### `IPV4` <a name="IPV4" id="@renovosolutions/cdk-library-aws-ipam.IpamPoolAddressFamily.IPV4"></a>

---


##### `IPV6` <a name="IPV6" id="@renovosolutions/cdk-library-aws-ipam.IpamPoolAddressFamily.IPV6"></a>

---

