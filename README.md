# validator
一个基于JQ,BOOTSTRAP的简易表单验证插件 </br>
<form> </br>
  <input data-vd-[ruleName]="true"> //表示需要校验这个规则 </br>
</form> </br>
默认提供的rule： </br>
 require --> 必填项 </br>
      email: --> 邮箱校验 </br>

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
