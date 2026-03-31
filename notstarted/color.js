#ifndef color_defined
#define color_defined
namespace color{
	string NONE = "\x1b[m";
	string RED = "\x1b[0;32;31m";
	string LIGHT_RED = "\x1b[1;31m";
	string GREEN = "\x1b[0;32;32m";
	string LIGHT_GREEN = "\x1b[1;32m";
	string BLUE = "\x1b[0;32;34m";
	string LIGHT_BLUE = "\x1b[1;34m";
	string DARY_GRAY = "\x1b[1;30m";
	string CYAN = "\x1b[0;36m";
	string LIGHT_CYAN = "\x1b[1;36m";
	string PURPLE = "\x1b[0;35m";
	string LIGHT_PURPLE = "\x1b[1;35m";
	string BROWN = "\x1b[0;33m";
	string YELLOW = "\x1b[1;33m";
	string LIGHT_GRAY = "\x1b[0;37m";
	string WHITE = "\x1b[1;37m";
	string SHINE = "\x1b[5m";       //闪烁
	string DASH = "\x1b[9m";        //中间一道横线
	string QUICKSHINE = "\x1b[6m";  //快闪
	string FANXIAN = "\x1b[7m";     //反显
	string XIAOYIN = "\x1b[8m";     //消隐, 消失隐藏
}
#endif