# react-foundation-xy-grid

React components for the xy grid in Foundation.

### Foundation CSS Is required!

### Components (with props)

- `<GridContainer />`
  - full
  - fullMedium
- `<Grid />`
  - paddingY
  - paddingX
  - marginY
  - marginX
- `<Cell />`
  - sizes - Maps to class names e.g. small-8 large-6
  - offsets - Maps to class names e.g. small-offset-4
  - shrink

### Example

```javascript
<GridContainer full>
  <Grid marginX marginY>
    <Cell sizes="medium-6">
      <p>Hello</p>
    </Cell>
    <Cell sizes="medium-6">
      <p>World</p>
    </Cell>
  </Grid>
</GridContainer>
```
