# validator
* 一个基于JQ,BOOTSTRAP的简易表单验证插件 
  > <a--form> 
  > <a--input data-vd-[ruleName]="true"> //表示需要校验这个规则 
  > </a--form> 
* 默认提供的rule： 
 > require --> 必填项 
 > email: --> 邮箱校验 

-- 启用 </br>
$(fromDom).validator({}) </br> 
--- 自定义规则 </br>
$(fromDom).validator({}).customRules(params)</br>
or --> $.fn.customRules(params)</br>
option ---> { </br>
  'ruleName':function(){ </br>
    return rule; </br>
  } </br>
} </br>
待完善
