import React from "react";

const TaskInput = () => {
  return (
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <i class="material-icons prefix">assignment</i>
            <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
            <label for="icon_prefix2">Add a Task</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskInput;
