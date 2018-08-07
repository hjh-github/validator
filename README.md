# validator
一个基于JQ,BOOTSTRAP的简易表单验证插件 </br>
<form> </br>
  <input data-vd-[ruleName]="true"> //表示需要校验这个规则
</form>
默认提供的rule：
 require: function() {
        return this.val() && this.val() !== "";
      },
      email: function() {
        return new RegExp(
          "^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$"
        ).test($(this).val());
      }

-- 启用 </br>
$(fromDom).validator({}) </br> 
--- 自定义规则 </br>
$(fromDom).validator({}).customRules(option)</br>

option ---> {
  'ruleName':function(){
    return rule;
  }
}
待完善
