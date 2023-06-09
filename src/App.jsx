import React, { useState } from "react";
//memory router는 히스토리를 메모리에만 저장하는 훅. 이는 껍데기는 리액트, 안은 다른 앱인 하이브리드 개발에서 사용.
// Hash router: 사용하면 url에 /#이 추가됨.
// #이란? 한 html 파일 안에서 여러 개의 위치를 잡는 기능을 함. 문서가 길면 a태그로 이름을 지정하여 이름만 입력하면 그 부분으로 이동할 수 있다.
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import pMinDelay from "p-min-delay";

//설치한 webpackchunkname 플러그인을 이용하여 여러 개의 js파일을 하나의 청크로 묶는다.
//pMinDelay로 로딩 시간을 1초로 강제.
const Header = React.lazy(() => pMinDelay(import(/* webpackChunkName:"home" */ "./components/Header"), 1000));
const Home = React.lazy(() => pMinDelay(import(/* webpackChunkName:"home" */ "./components/Home"), 1000));
const NotFound = React.lazy(() => pMinDelay(import(/* webpackChunkName:"home" */ "./components/NotFound"), 1000));

const Loading = React.lazy(() => pMinDelay(import(/* webpackChunkName:"home" */ "./components/Loading"), 1000));

const About = React.lazy(() => pMinDelay(import(/* webpackChunkName:"about" */ "./components/About"), 1000));
const Members = React.lazy(() => pMinDelay(import(/* webpackChunkName:"members" */ "./components/Members"), 1000));

const SongList = React.lazy(() => pMinDelay(import(/* webpackChunkName:"songs" */ "./components/SongList"), 1000));
const Player = React.lazy(() => pMinDelay(import(/* webpackChunkName:"songs" */ "./components/Player"), 1000));

const App = () => {
  const [songs] = useState([
    { id: 1, title: "Fallin' for you", musician: "Colbie callet", youtube_link: "PABUl_EX_hw" },
    { id: 2, title: "Can't hurry love", musician: "The supremes", youtube_link: "EJDPhjQft04" },
    { id: 3, title: "Landslide", musician: "Dixie chicks", youtube_link: "V2N7gYom9-A" },
    { id: 4, title: "Can't let go", musician: "Linda ronstadt", youtube_link: "P-EpGKXmoe4" },
    { id: 5, title: "Doctor my eyes", musician: "Jackson Browne", youtube_link: "7JlFKS_1oZk" },
    { id: 6, title: "We gotta get you a woman", musician: "Todd Rundgren", youtube_link: "EyUjbBViAGE" },
    { id: 7, title: "Hip to my heart", musician: "Band Perry", youtube_link: "vpLCFnD9LFo" },
    { id: 8, title: "Rolling in the deep", musician: "Adele", youtube_link: "EvK8pDK6IQU" },
  ]);

  const [members] = useState([
    { name: "Maggie Adams", photo: "photos/photos/Mag.png" },
    { name: "Sammie Purcell", photo: "photos/photos/Sam.png" },
    { name: "Tim Purcell", photo: "photos/photos/Tim.png" },
    { name: "Scott King", photo: "photos/photos/King.png" },
    { name: "Johnny Pike", photo: "photos/photos/JPike.jpg" },
    { name: "Toby Ruckert", photo: "photos/photos/Toby.jpg" },
  ]);

  //이곳에서 컴포넌트에 전달할 state를 결정한다.
  //React.Suspense를 사용하면 로딩 중에 보여줄 화면을 보여줄 수 있다.
  return (
    <React.Suspense fallback={<Loading />}>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About title={"여우와 늙다리들"} />}></Route>
            <Route path="/members" element={<Members members={members} />}></Route>
            <Route path="/songs" element={<SongList songs={songs} />}>
              <Route
                index
                element={
                  <>
                    <hr />
                    <h3>재생 중인 곡 없음</h3>
                  </>
                }
              ></Route>
              <Route path=":id" element={<Player songs={songs} />} />
            </Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </Router>
    </React.Suspense>
  );
};

export default App;
