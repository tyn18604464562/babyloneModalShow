import React, {
    FC,
    Suspense,
    useState,
    useEffect,
  } from "react";
  import "./index.css";
  import { useHistory, useLocation } from "react-router-dom";
  // import { ques } from "@api/index";
  import Loading from "@components/Loading/Loading";
  import BtnBoxs from "@components/Panel/components/BtnChecks";
  import AlarmScene from "./scenes/AlarmScene";
  import SafeScene from "./scenes/SafeScene";
  import A01Scene from "./scenes/A01Scene";
  import A02Scene from "./scenes/A02Scene";
  import A03Scene from "./scenes/A03Scene";
  import A04Scene from "./scenes/A04Scene";
  import A05Scene from "./scenes/A05Scene";

  const BtnData = [
    {
        name: "机房",
        flag: true,
        childrenStatus: true,
        children: [
            {
                name: "安防监测",
                flag: true
            },
            {
                name: "电力监测",
                flag: false
            }
        ]
    },
    {
        name: "机柜",
        flag: true,
        childrenStatus: true,
        children: [
            {
                name: "A-01",
                flag: false
            },
            {
                name: "A-02",
                flag: false
            },
            {
                name: "A-03",
                flag: false
            },
            {
                name: "A-04",
                flag: false
            },
            {
                name: "A-05",
                flag: false
            }
        ]
    }
]

const btnMapCom = {
  "安防监测": <SafeScene />,
  "电力监测": <AlarmScene />,
  "A-01": <A01Scene />,
  "A-02": <A02Scene />,
  "A-03": <A03Scene />,
  "A-04": <A04Scene />,
  "A-05": <A05Scene />
}
  
const SceneRender: FC<{}> = () => {
  const [sceneType, setSceneType] = useState("安防监测")
  const RenderScene = (sceneType: string) => {
    const Com = btnMapCom[sceneType]
    return Com
  }

  const btnSwitch = (name: string) => {
    setSceneType(name)
  }

  return (
    <>
      <Suspense fallback={Loading}>
        <div className="test-babylone-com">
          {RenderScene(sceneType)}
          <BtnBoxs 
            btnData={BtnData}
            onSwitch={btnSwitch}
          />
        </div>
      </Suspense>
    </>
  );
};
export default SceneRender;
  