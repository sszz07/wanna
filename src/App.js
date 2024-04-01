import { useState } from 'react';
import './App.css';
import bg from './img/wh_banner.jpg'
import { Routes, Route, Link,useNavigate } from 'react-router-dom'
import Register from './user_route/Register';
import axios from 'axios';
function App() {
  let navigate = useNavigate()


  let [Id, setId] = useState("");
  let [Pw, setPw] = useState("");


  const handleSubmit = async (e) => {
      e.preventDefault();
      axios.post('http://15.164.95.29/Login.php', {
        'Id' : Id,
        'Pw' : Pw,
      })
        .then(function (response) {
        
          console.log(response.data);
          if(response.data === '존재함'){
            alert('환영합니다')

            navigate('/Main_page')
          }else{
            alert('존재하지 않는 이메일 입니다')
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>
          <div>
            <div className="main-bg" style={{ backgroundImage: 'url(' + bg + ')' }}></div>
          </div>

          <div class="flex min-h-full flex-col justify-center px-6 py-5 lg:px-8">
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form class="space-y-6" onSubmit={handleSubmit}>

                <div>
                  <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                  </div>
                  <div class="mt-2">

                       {/* autocomplete="email" */}
                    <input id="email" name="email" type="text" value={Id} onChange={(e) => setId(e.target.value)}  required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div>
                  <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>

                  </div>
                  <div class="mt-2">
                    <input id="password" name="password" type="password" value={Pw} onChange={(e) => setPw(e.target.value)} autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div>
                  {/* flex w-full-flex는 요소의 너비 w-ful 너비를 풀로 한다 */}
                  {/* justify-center 요소를 가운데로 맞춘다 */}
                  {/* rounded-md 테두리 반경 */}
                  <button type="submit" class="flex w-full justify-center rounded-md bg-stone-500 px-3 py-1.5 text-sm font-semibold leading-1 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-lg" >로 그 인</button>
                </div>

                <div>
                  <button type="submit" onClick={()=>{ navigate('/Register') }} class="flex w-full justify-center rounded-md bg-stone-500 px-3 py-1.5 text-sm font-semibold leading-1 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-lg">회 원 가 입</button>
                </div>
              </form>

              <div class="text-sm" style={{ marginTop: '20px' }}>
                <a href="#" class="font-semibold" >비밀번호 찾기</a>
              </div>
            </div>
          </div>
        </div>} />
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Main_page" element={ <text class="block font-medium text-gray-900" style={{ marginLeft: '5px', marginTop: '5px', fontSize:'30px' }}>메인 페이지</text>}/>
       

      </Routes>
    </div>
  )
}



export default App;
