var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author zgm
 *
 */
var LevelGameDataParse = (function () {
    function LevelGameDataParse() {
    }
    //针对当前关卡JSON数据，进行解析
    LevelGameDataParse.parseLevelGameData = function (val) {
        GameData.stepNum = val.step; //玩家剩余步数
        GameData.levelStepNum = val.step; //当前关卡步数
        GameData.elementTypes = val.element; //当前关卡出现的元素类型
        GameData.levelBackgroundImageName = val.levelbgimg; //当前关卡背景图资源名
        LevelGameDataParse.parseLevelReq(val.levelreq);
    };
    //解析过关条件数据 
    LevelGameDataParse.parseLevelReq = function (val) {
        GameData.levelReq.openChange();
        var len = val.length;
        for (var i = 0; i < len; i++) {
            GameData.levelReq.addElements(val[i].type, val[i].num);
        }
    };
    return LevelGameDataParse;
}());
__reflect(LevelGameDataParse.prototype, "LevelGameDataParse");
//# sourceMappingURL=LevelGameDataParse.js.map