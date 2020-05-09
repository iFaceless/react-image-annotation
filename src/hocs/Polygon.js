import { getCoordPercentage } from '../utils/offsetCoordinates'

export const TYPE = 'POLYGON'

export function intersects({ x, y }, geometry) {
    // TODO 判断线段相交
}

export function area(geometry) {
    // TODO: 返回区域面积
}

export const methods = {
    onTouchStart(annotation, e) {
        return pointerDown(annotation, e)
    },
    onTouchEnd(annotation, e) {
        return pointerUp(annotation, e)
    },
    onTouchMove(annotation, e) {
        return pointerMove(annotation, e)
    },
    onMouseDown(annotation, e) {
        return pointerDown(annotation, e)
    },
    onMouseUp(annotation, e) {
        return pointerUp(annotation, e)
    },
    onMouseMove(annotation, e) {
        return pointerMove(annotation, e)
    }
}

function pointerDown(annotation, e) {

}

function pointerUp(annotation, e) {

}

function pointerMove(annotation, e) {

}