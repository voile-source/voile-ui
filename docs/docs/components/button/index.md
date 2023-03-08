---
title: 按钮
lang: en-ch
---

# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

<div style="margin-top: 20px">
  <div>
    <v-button >按钮 1</v-button>
    <v-button type="primary">按钮 1</v-button>
    <v-button type="success">按钮 1</v-button>
    <v-button type="danger">按钮 1</v-button>
    <v-button type="warning">按钮 1</v-button>
    <v-button type="info">按钮 1</v-button>
  </div>

  <div style="margin-top: 10px">
    <v-button plain>按钮 1</v-button>
    <v-button type="primary" plain>按钮 1</v-button>
    <v-button type="success" plain>按钮 1</v-button>
    <v-button type="danger" plain>按钮 1</v-button>
    <v-button type="warning" plain>按钮 1</v-button>
    <v-button type="info" plain>按钮 1</v-button>
  </div>

  <div style="margin-top: 10px">
    <v-button round>按钮 1</v-button>
    <v-button type="primary" round>按钮 1</v-button>
    <v-button type="success" round>按钮 1</v-button>
    <v-button type="danger" round>按钮 1</v-button>
    <v-button type="warning" round>按钮 1</v-button>
    <v-button type="info" round>按钮 1</v-button>
  </div>

  <div style="margin-top: 10px">
    <v-button circle><v-icon>i</v-icon></v-button>
    <v-button type="primary" circle><v-icon>i</v-icon></v-button>
    <v-button type="success" circle><v-icon>i</v-icon></v-button>
    <v-button type="danger" circle><v-icon>i</v-icon></v-button>
    <v-button type="warning" circle><v-icon>i</v-icon></v-button>
    <v-button type="info" circle><v-icon>i</v-icon></v-button>
  </div>

  <div style="margin-top: 10px">
    <v-button disabled>按钮 1</v-button>
    <v-button type="primary" disabled>按钮 1</v-button>
    <v-button type="success" disabled>按钮 1</v-button>
    <v-button type="danger" disabled>按钮 1</v-button>
    <v-button type="warning" disabled>按钮 1</v-button>
    <v-button type="info" disabled>按钮 1</v-button>
  </div>

  <div style="margin-top: 10px">
    <v-button plain disabled>按钮 1</v-button>
    <v-button type="primary" plain disabled>按钮 1</v-button>
    <v-button type="success" plain disabled>按钮 1</v-button>
    <v-button type="danger" plain disabled>按钮 1</v-button>
    <v-button type="warning" plain disabled>按钮 1</v-button>
    <v-button type="info" plain disabled>按钮 1</v-button>
  </div>
  
</div>

::: details CODE

```vue
<div style="margin-top: 20px">
  <div>
    <v-button >按钮 1</v-button>
    <v-button type="primary">按钮 1</v-button>
    <v-button type="success">按钮 1</v-button>
    <v-button type="danger">按钮 1</v-button>
    <v-button type="warning">按钮 1</v-button>
    <v-button type="info">按钮 1</v-button>
  </div>

  <div style="margin-top: 10px">
    <v-button plain>按钮 1</v-button>
    <v-button type="primary" plain>按钮 1</v-button>
    <v-button type="success" plain>按钮 1</v-button>
    <v-button type="danger" plain>按钮 1</v-button>
    <v-button type="warning" plain>按钮 1</v-button>
    <v-button type="info" plain>按钮 1</v-button>
  </div>

  <div style="margin-top: 10px">
    <v-button round>按钮 1</v-button>
    <v-button type="primary" round>按钮 1</v-button>
    <v-button type="success" round>按钮 1</v-button>
    <v-button type="danger" round>按钮 1</v-button>
    <v-button type="warning" round>按钮 1</v-button>
    <v-button type="info" round>按钮 1</v-button>
  </div>

  <div style="margin-top: 10px">
    <v-button circle><v-icon>i</v-icon></v-button>
    <v-button type="primary" circle><v-icon>i</v-icon></v-button>
    <v-button type="success" circle><v-icon>i</v-icon></v-button>
    <v-button type="danger" circle><v-icon>i</v-icon></v-button>
    <v-button type="warning" circle><v-icon>i</v-icon></v-button>
    <v-button type="info" circle><v-icon>i</v-icon></v-button>
  </div>

  <div style="margin-top: 10px">
    <v-button disabled>按钮 1</v-button>
    <v-button type="primary" disabled>按钮 1</v-button>
    <v-button type="success" disabled>按钮 1</v-button>
    <v-button type="danger" disabled>按钮 1</v-button>
    <v-button type="warning" disabled>按钮 1</v-button>
    <v-button type="info" disabled>按钮 1</v-button>
  </div>

  <div style="margin-top: 10px">
    <v-button plain disabled>按钮 1</v-button>
    <v-button type="primary" plain disabled>按钮 1</v-button>
    <v-button type="success" plain disabled>按钮 1</v-button>
    <v-button type="danger" plain disabled>按钮 1</v-button>
    <v-button type="warning" plain disabled>按钮 1</v-button>
    <v-button type="info" plain disabled>按钮 1</v-button>
  </div>

</div>
```

:::

## 禁用状态

你可以使用 disabled 属性来定义按钮是否被禁用。

使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。

<div style="margin-top: 20px">

  <div style="margin-top: 10px">
    <v-button disabled>按钮 1</v-button>
    <v-button type="primary" disabled>按钮 1</v-button>
    <v-button type="success" disabled>按钮 1</v-button>
    <v-button type="danger" disabled>按钮 1</v-button>
    <v-button type="warning" disabled>按钮 1</v-button>
    <v-button type="info" disabled>按钮 1</v-button>
  </div>

  <div style="margin-top: 10px">
    <v-button plain disabled>按钮 1</v-button>
    <v-button type="primary" plain disabled>按钮 1</v-button>
    <v-button type="success" plain disabled>按钮 1</v-button>
    <v-button type="danger" plain disabled>按钮 1</v-button>
    <v-button type="warning" plain disabled>按钮 1</v-button>
    <v-button type="info" plain disabled>按钮 1</v-button>
  </div>
  
</div>

::: details CODE

```vue
<div style="margin-top: 10px">
    <v-button disabled>按钮 1</v-button>
    <v-button type="primary" disabled>按钮 1</v-button>
    <v-button type="success" disabled>按钮 1</v-button>
    <v-button type="danger" disabled>按钮 1</v-button>
    <v-button type="warning" disabled>按钮 1</v-button>
    <v-button type="info" disabled>按钮 1</v-button>
  </div>

  <div style="margin-top: 10px">
    <v-button plain disabled>按钮 1</v-button>
    <v-button type="primary" plain disabled>按钮 1</v-button>
    <v-button type="success" plain disabled>按钮 1</v-button>
    <v-button type="danger" plain disabled>按钮 1</v-button>
    <v-button type="warning" plain disabled>按钮 1</v-button>
    <v-button type="info" plain disabled>按钮 1</v-button>
  </div>
</div>
```

:::

## Button 属性

| 属性名 |      说明      |    类型 | 默认值 |
| ------ | :------------: | ------: | ------ |
| size   |      尺寸      |  string | --     |
| type   |      类型      |  string | --     |
| plain  | 是否为朴素按钮 | boolean | --     |
