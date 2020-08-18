export { default as Global } from '../../components/global.vue'
export { default as Item } from '../../components/Badgets/Item.vue'
export { default as Styles } from '../../components/Badgets/styles.js'
export { default as Button } from '../../components/Form/Button.vue'
export { default as Form } from '../../components/Form/Form.vue'
export { default as Input } from '../../components/Form/Input.vue'
export { default as Container } from '../../components/Layout/Container.vue'
export { default as Spinner } from '../../components/Loadings/Spinner.vue'
export { default as Icon } from '../../components/Logo/Icon.vue'
export { default as Main } from '../../components/Logo/Main.vue'
export { default as List } from '../../components/Movies/List.vue'
export { default as Bar } from '../../components/Search/Bar.vue'
export { default as Heading } from '../../components/Typography/Heading.vue'
export { default as SubHeading } from '../../components/Typography/SubHeading.vue'
export { default as Index } from '../../components/Nav/Sidebar/Index.vue'

export const LazyGlobal = import('../../components/global.vue' /* webpackChunkName: "components/global" */).then(c => c.default || c)
export const LazyItem = import('../../components/Badgets/Item.vue' /* webpackChunkName: "components/Badgets/Item" */).then(c => c.default || c)
export const LazyStyles = import('../../components/Badgets/styles.js' /* webpackChunkName: "components/Badgets/styles" */).then(c => c.default || c)
export const LazyButton = import('../../components/Form/Button.vue' /* webpackChunkName: "components/Form/Button" */).then(c => c.default || c)
export const LazyForm = import('../../components/Form/Form.vue' /* webpackChunkName: "components/Form/Form" */).then(c => c.default || c)
export const LazyInput = import('../../components/Form/Input.vue' /* webpackChunkName: "components/Form/Input" */).then(c => c.default || c)
export const LazyContainer = import('../../components/Layout/Container.vue' /* webpackChunkName: "components/Layout/Container" */).then(c => c.default || c)
export const LazySpinner = import('../../components/Loadings/Spinner.vue' /* webpackChunkName: "components/Loadings/Spinner" */).then(c => c.default || c)
export const LazyIcon = import('../../components/Logo/Icon.vue' /* webpackChunkName: "components/Logo/Icon" */).then(c => c.default || c)
export const LazyMain = import('../../components/Logo/Main.vue' /* webpackChunkName: "components/Logo/Main" */).then(c => c.default || c)
export const LazyList = import('../../components/Movies/List.vue' /* webpackChunkName: "components/Movies/List" */).then(c => c.default || c)
export const LazyBar = import('../../components/Search/Bar.vue' /* webpackChunkName: "components/Search/Bar" */).then(c => c.default || c)
export const LazyHeading = import('../../components/Typography/Heading.vue' /* webpackChunkName: "components/Typography/Heading" */).then(c => c.default || c)
export const LazySubHeading = import('../../components/Typography/SubHeading.vue' /* webpackChunkName: "components/Typography/SubHeading" */).then(c => c.default || c)
export const LazyIndex = import('../../components/Nav/Sidebar/Index.vue' /* webpackChunkName: "components/Nav/Sidebar/Index" */).then(c => c.default || c)
