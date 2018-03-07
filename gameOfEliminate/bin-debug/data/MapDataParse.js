var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author zgm
 *
 */
var MapDataParse = (function () {
    function MapDataParse() {
    }
    //根据外部加载的数据来创建地图数据，数值均为-1的区域无法创建小方格
    MapDataParse.createMapData = function (val) {
        var len = val.length;
        GameData.unmapnum = len;
        var index = 0;
        for (var i = 0; i < len; i++) {
            index = val[i];
            GameData.mapData[Math.floor(index / GameData.MaxColumn)][index % GameData.MaxRow] = -1;
        }
        GameData.currentElementNum = GameData.MaxColumn * GameData.MaxRow - len;
    };
    return MapDataParse;
}());
__reflect(MapDataParse.prototype, "MapDataParse");
//# sourceMappingURL=MapDataParse.js.map