[![npm version](https://badge.fury.io/js/%40connect-dot%2Fui-hooks.svg)](https://badge.fury.io/js/%40connect-dot%2Fui-hooks)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHubstar](https://img.shields.io/github/stars/connect-dot/ui-hooks?style=social)]()
![GitHub watchers](https://img.shields.io/github/watchers/connect-dot/ui-hooks?style=social)

![GitHub issues](https://img.shields.io/github/issues/connect-dot/ui-hooks?color=success)
![GitHub closed issues](https://img.shields.io/github/issues-closed/connect-dot/ui-hooks?color=critical)
![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/connect-dot/ui-hooks?color=success)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed-raw/connect-dot/ui-hooks?color=critical)

This is react custom hook library for web action like scroll lock, to use media query.

The goal for this project is to make custom hook which is useful to deal with ui action. When I develop some web ui, there is some problem which to make some component. For example, The component which need to change based on media query have got on my nerves.

I hope this project is useful for solving that kind of problem.

## API

<<<<<<< HEAD
| API                              | Result             | Parameter                                       | Description                               |
| -------------------------------- | ------------------ | ----------------------------------------------- | ----------------------------------------- |
| `useMediaQuery(config, initial)` | [mediaType, error] | `config : { key : string }`, `initial : string` | get Media Query from config.              |
| `useScrollLock(on)`              | void               | `on : boolean`                                  | scrollLock when some component is visible |



## Example

There is some example code with Typescript. If you want to use Javascript, you can replace enum to object. 

### useMediaQuery

```Typescript

enum DEVICE {
  DESKTOP = "DESKTOP",
  TABLET = "TABLET",
  MOBILE = "MOBILE"
}
...
const Component : React.FC<IProps> => {
  const [currentDevice] = useMediaQuery({
    [DEVICE.DESKTOP] : "1240px",
    [DEVICE.TABLET] : "768px",
    [DEVICE.MOBILE] : "425px"
  },DEVICE.MOBILE)
  
  return(
    currentDevice === DEVICE.DESKTOP ? <DesktopComponent/> :
    currentDevice === DEVICE.TABLET ? <TabletComponent/> :
    currentDevice === DEVICE.MOBILE ? <MobileComponent/> :
    <DefaultComponent/>
  )
}

```


=======
| API                                         | Result             | Parameter                                                                          | Description                               |
| ------------------------------------------- | ------------------ | ---------------------------------------------------------------------------------- | ----------------------------------------- |
| `useMediaQuery(config, initial)`            | [mediaType, error] | `config : { key : string }`, `initial : string`                                    | get Media Query from config.              |
| `useScrollLock(on)`                         | void               | `on : boolean`                                                                     | scrollLock when some component is visible |
| `useColorPick(image, position, initColor?)` | {color, loading}   | `image: string | File`, `position : { x: number, y: number }`, `initColor: string` | hook for color pick from image            |
>>>>>>> 82ce810 (Docs : write about useColorPick API)
