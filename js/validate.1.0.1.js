(function(global, factory, plug) {
  factory.call(global, global.jQuery, plug);
})(
  typeof window == "undefined" ? this : window,
  function($, plug) {
    // 默认配置项
    var __DEF__ = {
      raise: "change",
      pre: "vd-",
      errMsg: " is error "
    };
    // 默认规则引擎
    var __RULES__ = {
      require: function() {
        return this.val() && this.val() !== "";
      },
      email: function() {
        return new RegExp(
          "^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$"
        ).test($(this).val());
      },
      munber: function() {
        return true;
      },
      regex: function() {
        return true;
      },
      integer: function() {
        return true;
      },
      length: function() {
        return true;
      }
    };
    // 真正被创建的闭包 并且只执行一次的内存机构
    $.fn[plug] = function(option) {
      var self = this;
      $.extend(this, __DEF__, option);
      // console.log(this);
      //
      if (this.is("form")) {
        var $fileds = this.find("input,select,textarea").not(
          "[type=submit],[type=button],[type=reset]"
        );
        $fileds.on(this.raise, function() {
          var $field = $(this); //当前被校验元素
          var $group = $field.parents(".form-group:first"); // group 用于校验提示
          // 重置显示状态
          $group
            .removeClass("has-error has-succse")
            .find(".help-block")
            .remove();

          var result = false; //校验结果
          var errMsg = self.errMsg;
          //根据当前默认rules进行匹配
          $.each(__RULES__, function(rule, active) {
            if ($field.data(self.pre + rule)) {
              result = active.call($field);
              //  一旦有条件不满足 则跳出校验
              if (!result) {
                errMsg =
                  $field.data(self.pre + rule + "-massage") || self.errMsg;
                $group.addClass("has-error");
                $field.after('<span class="help-block">' + errMsg + "</span>");
                return false;
              } else {
                $group.addClass("has-success");
              }
              // console.log(rule,'---',result);
            }
          });
        });
      } else {
        throw new Error("is not form");
      }
    };
  },
  "validator"
);
