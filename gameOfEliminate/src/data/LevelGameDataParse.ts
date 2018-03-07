/**
 *
 * @author zgm
 *
 */
class LevelGameDataParse {
	//针对当前关卡JSON数据，进行解析
	public static parseLevelGameData(val:any){
		GameData.stepNum  = val.step;//玩家剩余步数
		GameData.levelStepNum = val.step;//当前关卡步数
        GameData.elementTypes = val.element; //当前关卡出现的元素类型
        GameData.levelBackgroundImageName = val.levelbgimg;//当前关卡背景图资源名
		LevelGameDataParse.parseLevelReq(val.levelreq);
	}
	//解析过关条件数据 
	private static parseLevelReq(val:any){	
		GameData.levelReq.openChange();
		let len = val.length;
		for(let i=0;i<len;i++){
			GameData.levelReq.addElements(val[i].type,val[i].num);
		}
	}
}