# 常见问题及回答板块
::: warning
引自https://docs.qq.com/doc/p/46a9aa917fe84d84343d3ffeaa8a2e23d00a5f47?dver=3.0.0    
可能并不会及时更新
:::

问：怎么改鼠标指针？   
答：
![图一](/question1.png)
然后点浏览   
![图二](/question2.png)
往下滑可以找到十字的指针。   
问：怎么无图找宝藏   
答：
https://www.bilibili.com/video/BV1La411372b      
问：RSG能不能刷到SSG种？   
答：正常人刷是不可能刷到的，如果刷到也按SSG处理。Java的随机数并非完全随机，其与Java版本、系统时间等有关。网站https://panda4994.github.io/seedinfo可以查询种子的生成信息。目前所有SSG种子在此网站的结果都是无法刷到。   
问：为什么我每次重开，设置都被重置了？   
答：因为你安装了mod“StandardSettings”。删掉即可。   
问：怎么用指令让龙栖息？   
答：
``` minecraft指令
/data merge entity @e[type=ender_dragon,limit=1] {DragonPhase:2}   
```
问：怎么用指令高亮金块？   
答：
``` minecraft指令
/fill ~-16 ~-16 ~-16 ~15 ~15 ~15 minecraft:command_block{Command:"/summon shulker ~ ~ ~ {Color:4,Invulnerable:1,NoAI:1,ActiveEffects:[{Id:24,Amplifier:255,Duration:999999}]}",auto:1} replace minecraft:gold_block 
```  
问：Gamma值最高能调多少?   
答：5.0   
问：为什么海豚种用不了setspawn？   
答：json里把201.5换成200.5   
问：速通能用什么启动器？   
答：只能用官启和MultiMC，如果用其他启动器不能留有其他启动器的痕迹，比如去掉PCL2启动器的自定义信息：   
![图三](/launcher1.png)
问：HanabiYaki是哪国人？   
答：菲律宾人，以前在台湾住过。   
问：怎样看末影之眼？   
答：左加中减右不变   
问：为什么多开时，后台世界不能自动暂停？   
答：”F3+p”保持为“disabled”，墙会帮你暂停后台世界。使用julti的话确保julti设置里F3是打开的。   
问：为什么多开时，打开宏之后摁一次t或e后就不能reset了，只能摁u和f   
答：   
问：如何去掉hmcl启动器的自定义信息   
答：尝试使用PCL2或multimc   
问：用什么放大镜测眼更清晰？   
答：建议使用eyezoom宏（需要auto hotkey），群内搜索下载   
问：如何快速拾取箱子里的所有同类物品？   
答：指针对着你所要拿的物品，按住shift，然后快捷键→左键→快捷键→左键（有顺序按，速度要快），快捷键也可以是你切换副手的键位   
问：Live split激活不了怎么办？   
答：   
问：群里的1.16.5speedrunigt加进mods后启动不了游戏（已经装了fabric）   
答：   
问：手机启动器可以RSG吗？   
答：   
问：为什么RSG中一定见不到满眼种?   
答：原因如下:   
1.满眼种概率为一万亿分之一。全世界所有mc玩家（手工）筛的种子不到这个数字的零头。   
2.Minecraft java版中随机种子中种子随机数与系统时间有关，例如某个满眼种可能只有在侏罗纪时期才能筛出来，同时rsg不可以乱改时间，这属于glitched，就算改了极大概率也出不来种子（除非你能精确控制毫秒甚至微秒纳秒）   
3.所有一环满眼种子由Neil，KaptainWutax，MatthewBolan等大佬带头筛出（请相信他们的实力），所有一环满眼种都不可能在人类文明的有限时间内通过RSG出现。你说二环?那你加油赌盲传进sh+满眼，等你发挥，没人赌这个，你可以当第一个。   

从概率上看:   
一个末地传送门眼睛数概率计算公式:   
x个眼睛的概率:P=(12! / (x! * (12-x)!))*(x*0.1)*((12－x)*0.9)   
所以12眼为0.000000000001   
11眼为0.000000000108   
10眼为0.0000000005346   
相比之下，被雷劈的概率大约为1/1750000。够直观了吧……   
   
——爱来自某不知名筛种哥   
