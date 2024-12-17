import { useState, useCallback, useEffect, useRef } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef
  const passwordRef = useRef(null);

  const copyPasswordToClip = useCallback(() => {
    //copy to clipboard
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  //usecallback
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "@#$%^&*(){}[]|?/>.`~";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  //useEffect
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <h1 className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <div className="flex shadow rounded-lg overflow-hidden m-4">
          <input
            type="text"
            value={password}
            placeholder="password"
            className="outline-none w-full py-1 px-3"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClip}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 "
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </h1>
    </>
  );
};

export default App;
