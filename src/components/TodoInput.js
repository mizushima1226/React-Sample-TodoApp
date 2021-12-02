import NecoIcon from '../pics/neco_icon.png';
import { useContext } from 'react';
import { useState } from 'react';
import { userTodo } from './Todos';

export default function TodoInput() {
  const { todos, setTodo } = useContext(userTodo);
  const [inputTask, setInputTask] = useState('');
  const handleInputTask = (evt) => {
    setInputTask(evt.target.value);
  };
  const handleStopSubmitTask = (evt) => {
    evt.preventDefault();
  };
  const handleSubmitTask = (evt) => {
    evt.preventDefault();
    if (inputTask === '') {
      // タスク未入力は認めない
      window.alert('タスクを入力してください');
      return;
    }

    const found = todos.find((todo) => todo.item === inputTask);
    if (found) {
      // タスクの重複は認めない
      window.alert('タスクが重複しています');
      return;
    }

    setTodo((todos) => [...todos, { item: inputTask, isCompleted: false }]);
    setInputTask('');
  };
  const handleDeleteAllTask = (evt) => {
    evt.preventDefault();
    setTodo([]);
  };

  return (
    <div className="flex">
      <img src={NecoIcon} alt="ネコアイコン" title="ネコ" width="10%" />
      <form id="task_form" onSubmit={handleStopSubmitTask}>
        <input
          id="task_input"
          type="text"
          value={inputTask}
          onChange={handleInputTask}
        />
        <button id="task_submit" type="button" onClick={handleSubmitTask}>
          やること追加
        </button>
        <button id="task_delete" type="button" onClick={handleDeleteAllTask}>
          全削除
        </button>
      </form>
    </div>
  );
}
