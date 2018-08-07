# validator

*一个基于JQ,BOOTSTRAP的简易表单验证插件
 ```
 > <form> 
  > <input data-vd-ruleName="true"> //表示需要校验这个规则 
  > </form>
  ```
*默认提供的rule：
```
require --> 必填项 email: --> 邮箱校验
```
-- 启用 
$(fromDom).validator({}) 
--- 自定义规则 
```
$(fromDom).validator({}).customRules(params)
or --> $.fn.customRules(params)
params ---> { 
  'ruleName':function(){ 
    return rule; 
  } 
} 
```
待完善


