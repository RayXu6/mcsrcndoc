# 如何寻找最佳出生点
众所周知，每个种子出生点都有一定的随机性。   
当你使用特定种子开启一个世界时，你将出生在这个种子特定的一个21*21格的范围内。    
这个范围内有些坐标还可以玩，有些距离目标位置太远，根本玩不了。    
所以我们必须要知道这个种子中最佳出生点在哪。   

所以，该怎样寻找种子最佳的出生点？只需两条指令
``` minecraft指令
/gamerule spawnRadius 0

/fill ~10 ~ ~10 ~-10 ~ ~-10 glass
```

找到玻璃方块范围内最好的一个位置，就是最佳出生点
::: tip
玩家只能生成在草方块或者别的什么固定方块上。不可能出生在水上或者空中，所以如果你在setspawn输入的坐标是不合规的坐标，它会用红色的信息提示你修改坐标。
:::
设置SetSpawn：
```json
{
     "seed": "输入种子", 
     "seed_name": "输入种子的命名", 
     "x": 输入X坐标, 
     "z": 输入Z坐标 
}   
```
::: tip
一定要注意json语言规范 同级最后一个字段后不能有空格 标点符号全英
:::
本篇来源：印象派Pie