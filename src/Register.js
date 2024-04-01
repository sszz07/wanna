import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
function Register() {
    let navigate = useNavigate();

        let [Id, setId] = useState("");
        let [Nick, setNick] = useState("");
        let [Pw, setPw] = useState("");
        let [Pw_re, setPw_re] = useState("");


        const handleSubmit = async (e) => {
    
            e.preventDefault();
            axios.post('http://15.164.95.29/Register.php', {
              'Id' : Id,
              'Pw' : Pw,
              'Nick' : Nick,
            })
              .then(function (response) {
                console.log(response.data);
                if(response.data === '존재함'){
                    alert('이미 존재하는 닉네임 입니다')
                  }else{
                    alert("회원가입 되었습니다");
                    navigate('/')
                  }
              })
              .catch(function (error) {
                console.log(error);
              });
          };


     

        return (
            <div>
                <div class="flex min-h-full flex-col justify-center px-6 py-2 lg:px-8">
                    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form class="space-y-6" onSubmit={handleSubmit} >
                            <div class="flex items-center justify-center">
                                <label class="block text-2xl font-medium leading-6 text-gray-900">회원가입</label>
                            </div>
                            {/* 아이디 */}
                            <div>
                                <div class="flex items-center">
                                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">이메일</label> 
                                    {/* <text class="block text-xs font-medium text-gray-900 text-red-500" style={{ marginLeft: '5px', marginTop: '5px' }}>사용할 수 없는 아이디 입니다</text> */}
                                </div>
                                <div class="mt-2">
                                {/* autocomplete="email" */}
                                    <input id="email" name="email" type="text"  value={Id} onChange={(e) => setId(e.target.value)} placeholder=' 이메일를 입력해주세요' required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            {/* 비밀번호 입력 */}
                            <div>
                                <div class="flex items-center justify-between">
                                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900" >비밀번호 입력</label>

                                </div>
                                <div class="mt-2">
                                    <input id="password" name="password" type="password" autocomplete="current-password" value={Pw} onChange={(e) => setPw(e.target.value)} placeholder=' 비밀번호 입력' required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            {/* 비밀번호 재입력 */}
                            <div>
                                <div class="flex items-center ">
                                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900" >비밀번호 확인</label> 
                                    {/* <text class="block text-xs font-medium text-gray-900 text-red-500" style={{ marginLeft: '5px', marginTop: '5px' }}>비밀번호가 일치하지 않습니다</text> */}

                                </div>
                                <div class="mt-2">
                                    <input id="password" name="password" type="password" autocomplete="current-password" placeholder=' 비밀번호 재입력' required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            {/* 닉네임 입력 */}
                            <div>
                                <div class="flex items-center ">
                                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900" >닉네임</label> 
                                    {/* <text class="block text-xs font-medium text-gray-900 text-red-500" style={{ marginLeft: '5px', marginTop: '5px' }}>사용할 수 없는 닉네임입니다</text> */}
                                </div>
                                <div class="mt-2">
                                    <input id="email" name="email" type="text"  placeholder=' 닉네임(3~10자)' value={Nick} onChange={(e) => setNick(e.target.value)} required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" />
                                </div>

                                <div>
                            
                            </div>
                            </div>

                            {/* <div> */}
                            {/* flex w-full-flex는 요소의 너비 w-ful 너비를 풀로 한다 */}
                            {/* justify-center 요소를 가운데로 맞춘다 */}
                            {/* rounded-md 테두리 반경 */}
                            {/* <button type="submit" class="flex w-full justify-center rounded-md bg-stone-500 px-3 py-1.5 text-sm font-semibold leading-1 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-lg" >로 그 인</button> */}
                            {/* </div> */}

                            {/* onClick={() => { navigate('/') }} */}
                            <div>
                                <button type="submit"  class="flex w-full justify-center rounded-md bg-stone-500 px-3 py-1.5 text-sm font-semibold leading-1 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-lg">가 입 하 기</button>
                            </div>
                
                        </form>

            
                    </div>
                </div>
            </div>
        )
    }

    export default Register;
