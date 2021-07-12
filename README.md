![npm](https://img.shields.io/npm/v/gps-convert) ![NPM](https://img.shields.io/npm/l/gps-convert) ![npm](https://img.shields.io/npm/dt/gps-convert)

[![NPM](https://nodei.co/npm/gps-convert.png)](https://nodei.co/npm/gps-convert/)

### 根据 coordtransform 封装成TS版本
https://github.com/wandergis/coordtransform

### 安装
```
  yarn install gps-convert

  npm i gps-convert
```
### 使用

```js

import { wgs84togcj02 } from 'gps-convert'
console.log(wgs84togcj02([lng, lat]))
```

```js
const gpsConvert = require('gps-convert')
console.log(gpsConvert.wgs84togcj02([lng, lat]))
```

### Type
```typescript
type LngLat = [lng: number, lat: number]
/**
 * 百度坐标系 (BD-09) 与 火星坐标系 (GCJ-02) 的转换
 * 即 百度 转 谷歌、高德
 * @param bd_lng
 * @param bd_lat
 * @returns {[number, number]}
 */
export declare const bd09togcj02: ([bd_lng, bd_lat]: LngLat) => LngLat;
/**
 * 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换
 * 即 谷歌、高德 转 百度
 * @param lng
 * @param lat
 * @returns {*[]}
 */
export declare const gcj02tobd09: ([lng, lat]: LngLat) => LngLat;
/**
 * WGS-84 转 GCJ-02
 * @param lng
 * @param lat
 * @returns {*[]}
 */
export declare const wgs84togcj02: ([lng, lat]: LngLat) => LngLat;
/**
 * GCJ-02 转换为 WGS-84
 * @param lng
 * @param lat
 * @returns {*[]}
 */
export declare const gcj02towgs84: ([lng, lat]: LngLat) => LngLat;
export declare const transformlat: ([lng, lat]: LngLat) => number;
export declare const transformlng: ([lng, lat]: LngLat) => number;
/**
 * 判断是否在国内，不在国内则不做偏移
 * @param lng
 * @param lat
 * @returns {boolean}
 */
export declare const out_of_china: ([lng, lat]: LngLat) => boolean;
```
