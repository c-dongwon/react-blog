import { useDispatch } from "react-redux";
import { testAction } from "../lib/store/modules/test";




const HomePage = () => {
  const dispatch = useDispatch();


  const onDispatch = () => dispatch(testAction("리덕스 테스트 액션입니다."));


  return (
    <div>
      <button type="button" onClick={onDispatch}>
        버튼
      </button>
    </div>
  );
};


export default HomePage;