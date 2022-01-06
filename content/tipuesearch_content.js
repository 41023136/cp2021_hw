var tipuesearch = {"pages": [{'title': 'About', 'text': '這是計算機程式課程 2021 Fall 的作業倉儲與網站 template \n \n 41023136 \n 網站倉儲:  https://github.com/41023136/cp2021_hw \n 網站連結:  https://41023136.github.io/cp2021_hw/ \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'run', 'text': '這個頁面利用  Brython  程式庫, 讓使用者可以直接在瀏覽器中執行 Python 語法程式 (與 CPython  語法比較 ). Brython 程式庫以 Javascript 編寫, 能在頁面 置入 html,  並 結合 第三方 Javascript 程式庫, 進行  2D  與  3D  繪圖應用. (範例:  https://imvickykumar999.github.io/Chrome-Extension/Brython%20Snake/snake.html  ) \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'run.html'}, {'title': 'Snake', 'text': '\n \n \n \n  啟動 Brython  \n \n \n \n \n Score: 0 \n \n High Score: 0 \n \n Instructions \n \n \n \n', 'tags': '', 'url': 'Snake.html'}, {'title': 'exam', 'text': '', 'tags': '', 'url': 'exam.html'}, {'title': 'w13', 'text': '\n 列出十個按鈕 \n \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  內建程式 1 ####################################### 內建程式 1 開始 \n \n \n \n  內建程式 1 ####################################### 內建程式 1 結束 \n \n  button 程式 1 ####################################### button 程式 1 開始 \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  editor1 結束   button 程式 1 ####################################### button 程式 1 結束 \n \n  button 程式 2 ####################################### button 程式 2 開始 \n \n', 'tags': '', 'url': 'w13.html'}, {'title': 'HW1', 'text': 'HW1 - 網際動畫與 touch typing 佔學期成績 20%. \n 何謂  Secure Shell ? \n HTTPS:  https://en.wikipedia.org/wiki/HTTPS \n Transport Layer Security:  https://en.wikipedia.org/wiki/Transport_Layer_Security \n SSH:  https://en.wikipedia.org/wiki/Secure_Shell \n 如何利用 SSH 協定將倉儲改版內容推送到 Github: \n SSH 了沒 \n 以下為 Github 所提供有關 Token 與 SSH 的說明資料: \n Github Personal Token:  https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ \n Github SSH:  https://docs.github.com/en/authentication/connecting-to-github-with-ssh \n Using the SSH protocol, you can connect and authenticate to remote servers and services. With SSH keys, you can connect to GitHub without supplying your username and personal access token at each visit. \n GnuPG  (GNU Privacy Guard): \n 如何利用  https://www.gpg4win.org/  保全數位檔案傳送. \n https://gnupg.org/gph/en/manual.pdf \n https://gnupg.org/documentation/manuals/gnupg.pdf \n https://www.gpg4win.org/doc/en/gpg4win-compendium.html \n 由於數位檔案很容易被改造, 因此在製作數位檔案內容時, 在 Windows 平台上可以利用 Gpg4win 加密或保全. \n GnuPG 加密 \n GnuPG 保全 - 在網站提供檔案下載前, 利用 Gpg4win 對檔案進行數位簽章 \n 在執行作業之前, 必須要仔細閱讀作業要求內容, 想像一下作業指定者為何要提出此一作業, 其目的為何, 然後再根據要求逐一安排時間完成. \n 作業一的主題為網際動畫與 touch typing, 並要求學員要至 Github 申請帳號, 並將作業內容直接在課程網頁中執行 Brython (Browser Python), 完成後將程式碼放到各學員 Github 帳號下的 Gist 區域, 然後再將作業連結提交至課程網頁倉儲的 Discussion 區. \n 另外, 除了要修改 Task1 頁面中動畫的程式外, 還要求使用者從 Cango 頁面, 將程式中的網際按鈕放到頁面, 以便控制程式的執行或中斷. \n 假如直翻 Browser Python 就是瀏覽器上的 Python, 除了能夠在瀏覽器上執行的 Python, 還有沒有其他環境上能夠執行的 Python？ \n 例如: 1994 年剛被開發出來的 Python 是用 C 寫的, 所以稱為 CPython, 可以在各種操作系統平台上執行, 而且累積二十幾年的發展, 已經擁有許多的程式庫, 讓 CPython 可以解決許多工程問題. \n 除了 CPython 與 Brython (以 Javascript 編寫) 之外, 還有以 Java 編寫的  Jython , 以 .NET 技術編寫的  ironPython , 還有以 Rust 編寫的  RustPython  或是以 Python 編寫的  PyPy , 每一種 Python 都有其特色, 在適合的環境中可用來解決各種不同的問題. \n \n 當我們看到  https://mde.tw/cp2021/content/Task1.html  這個頁面中的程式執行時, 應該會好奇, 為何能夠直接在瀏覽器的網頁上, 直接點擊 Run, Python 程式就能執行, 在頁面中畫靜態與動態的圖型. \n 這種在網頁上畫圖的依據是採用 HTML5 規格中的  Canvas API . 原本是設計給 Javascript 在網頁上繪圖, 透過 Canvas API 程式語法, 就可以透過 Brython 在頁面中繪圖. \n \n HW1 - 網際動畫與 touch typing 佔學期成績 20%. \n HW1 具體項目成果回報區 \n \n 請至  https://github.com  申請 Github 帳號後, 至  https://mde.tw/cp2021/content/Task1.html \xa0 頁面, 將左右碰撞移動的紅色方塊, 改為先移動到水平畫面中心點位置後, 接著上下碰撞移動. \n 請將 1. 的程式碼存入個人 Gist 區 ( 說明 ). \n 請在 1. 的程式中, 加入與  Cango 頁面  Fourbar 程式碼相同功能的啟動按鈕, 讓使用者可以利用按鈕啟動或中斷紅色方塊上下碰撞移動. 完成後請將程式碼存入個人 Gist 區. \n 請在 Gist 檔案編輯區, 利用鍵盤輸入  https://docs.github.com/en/github/writing-on-github/editing-and-sharing-content-with-gists/creating-gists#about-gists  中的這段英文內容, 請利用手機計時, 大概需要多少時間? 請將此段練習打字的內容與所需時間存入 Gist 檔案中. \n 請至少練習 key in 這段英文內容三次, 然後看看是否已經了解如何透過電腦鍵盤 touch typing? \n 接下來請利用中文輸入  https://ithelp.ithome.com.tw/articles/10206233  的第一段中文說明, 請利用手機計時, 大概需要多少時間? \n \n \n HW1-1 : 將左右碰撞移動的紅色方塊, 改為先移動到水平畫面中心點位置後, 接著上下碰撞移動. \n HW1-2 : 加入與  Cango 頁面  Fourbar 程式碼相同功能的啟動按鈕, 讓使用者可以利用按鈕啟動或中斷紅色方塊上下碰撞移動. 完成後請將程式碼存入個人 Gist 區. \n 程式碼說明: \n HW1-1.py \n Brython browser 模組 \n Brython browser html 模組 \n Brython enable/disable event \n Python 函式定義與呼叫 \n Python 縮排 (indentation) \n 字串 (string) \n 數列 (list) \n if 判斷式 \n 在 Python 關鍵字中, None, True 與 False 第一個字母都必須是大寫 \n 在 python.org 網站範圍搜尋 global 關鍵字 \n 有關 Python 的 global:  https://docs.python.org/3/faq/programming.html#what-are-the-rules-for-local-and-global-variables-in-python \n # 從 browser 導入 html\nfrom browser import html\n# 從 browser 導入 document 並且對應為 doc\nfrom browser import document as doc\n# 導入 browser.timer\nimport browser.timer\n\n# 定義一個 game() 函式\ndef game():\n    """\n利用 global 關鍵字 將 px, py 與 speed \n設為可在函式內改變對應內容 \n(意即, 這三個定義在函式外的全域變數,  \n在函式中分別位於等號左邊)\n    """\n    global px, py, speed\n    ctx.clearRect(px, py, width, height)\n    ctx.fillStyle = "red"\n    if px < canvas.width/2:\n        px += speed\n    else:\n        py -= speed\n    \n    if px < 0 or (px + width) > canvas.width:\n        speed = -speed\n    if py < 0 or (py + height) > canvas.height:\n        speed = -speed\n    \n    ctx.fillRect(px, py, width, height)\n\n"""\na variable declared outside of the function or \nin global scope is known as a global variable. \nThis means that a global variable can be accessed \ninside or outside of the function.\n"""\n\ncanvas = html.CANVAS(width = 600, height = 600)\ncanvas.id = "game-board"\nbrython_div = doc["brython_div"]\nbrython_div <= canvas\nctx = canvas.getContext("2d")\npx = 0\npy = 50\nwidth = 20\nheight = 20\nspeed = 2\n\nbrowser.timer.set_interval(game, 10) \n HW1-2.py \n from browser import document as doc\nfrom browser import timer\nfrom browser import html\nimport math\n\n# 建立 game-board canvas\n\ncanvas = html.CANVAS(width = 300, height = 300)\ncanvas.id = "game-board"\nbrython_div = doc["brython_div"]\nbrython_div <= canvas\nctx = canvas.getContext("2d")\npx = 0\npy = 50\nwidth = 20\nheight = 20\nspeed = 2\n\n# 建立 button\nbrython_div <= html.BUTTON("啟動", id="power")\n \ndef game():\n    global px, py, speed\n    ctx.clearRect(px, py, width, height)\n    ctx.fillStyle = "red"\n    if px < canvas.width/2:\n        px += speed\n    else:\n        py -= speed\n    \n    if px < 0 or (px + width) > canvas.width:\n        speed = -speed\n    if py < 0 or (py + height) > canvas.height:\n        speed = -speed\n    \n    ctx.fillRect(px, py, width, height)\n \n \n# 將 anim 設為 None\nanim = None\n \ndef launchAnimation(ev):\n    global anim\n    # 初始啟動, anim 為 None\n    if anim is None:\n        # 每 0.1 秒執行一次 draw 函式繪圖\n        anim = timer.set_interval(game, 10)\n        # 初始啟動後, 按鈕文字轉為"暫停"\n        doc[\'power\'].text = \'暫停\'\n    elif anim == \'hold\':\n        # 當 anim 為 \'hold\' 表示曾經暫停後的啟動, 因此持續以 set_interval() 持續旋轉, 且將 power 文字轉為"暫停"\n        anim = timer.set_interval(game, 10)\n        doc[\'power\'].text = \'暫停\'\n    else:\n        # 初始啟動後, 使用者再按 power, 此時 anim 非 None 也不是 \'hold\', 因此會執行 clear_interval() 暫停\n        # 且將 anim 變數設為 \'hold\', 且 power 文字轉為"繼續"\n        timer.clear_interval(anim)\n        anim = \'hold\'\n        doc[\'power\'].text = \'繼續\'\n\n \ndoc["power"].bind("click", launchAnimation)\n \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'HW', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n', 'tags': '', 'url': 'HW.html'}, {'title': 'HW1-1', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n', 'tags': '', 'url': 'HW1-1.html'}, {'title': 'HW2', 'text': '在電腦輔助設計的新電腦上可以利用 USB 隨身碟設定所謂 Hybrid 可攜程式系統, 也就是 Python 與 Portablegit 使用 c:\\2021_portable_kmol\\data 目錄中的檔案, 而將 start_ipv4.bat, start_ipv6.bat, data, wscite, tmp 等目錄放在 USB 隨身碟. \n 在電腦輔助設計室中, 以 USB 隨身碟啟動的 start_ipv4.bat 檔案內容:  start_ipv4_hybrid.txt \n 在動態系統中加入 run 頁面的 html 原始碼:  run.txt \n 當你建立 Github 帳號後就可以利用 Gist 儲存資料或程式碼, 且可以利用  https://mde.tw/cp2021/content/run.html  來執行 Brython 程式. \n 在  run.html  執行 Brython 程式, 可以使用下列三種方法: \n \n 直接連線至  https://mde.tw/cp2021/content/run.html  將 Brython 程式寫在編輯區, 然後按下 Run. \n 將 Brython 程式存在 Gist, 利用 run.html?src=Gist_URL,  run.html  中的 Javascript 就會導入此 Gist 程式執行. \n 將 Brython 程式寫在  run.html  頁面 html 超文件中, 然後安排其中的 Javascript 或 Brython 程式導入執行. \n \n 建立可攜程式系統時必須了解 start_ipv4.bat 或 start_ipv6.bat 中的所有指令用法: \n 以電腦輔助設計室中使用新電腦的 USB 可攜 Hybrid 設定 start_ipv4.bat 為例. \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n\nset Local=C:\\2021_cadlab_portable\\data\n\n%Disk%:\n\nset HomePath=%Disk%:\\home_ipv4\nset HomeDrive=%Disk%:\\home_ipv4\nset Home=%Disk%:\\home_ipv4\nset USERPROFILE=%Disk%:\\home_ipv4\n\nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n\nset PYTHONPATH=%Local%\\Python395\\DLLs;%Local%\\Python395\\Lib;%Local%\\Python395\\Lib\\site-packages;\n\nset PYTHONHOME=%Local%\\Python395\n\nREM 使用 putty 設定 git ssh 連線\nset GIT_SSH=%Disk%:\\putty\\plink.exe\n\nREM 設定跟 Python 有關的命令搜尋路徑\nset path_python=%Local%\\Python395;%Local%\\Python395\\Scripts;\nset path_portablegit=%Local%\\portablegit_2.31.1\\bin;\n\npath=%Disk%:;%path_python%;%path_portablegit%;%path%;\n\nREM ref: https://drive.google.com/file/d/1S0XYN-1MKxo0KFYxs0pFTcTrr8NL4n1b/view\n\nREM REGEDIT.EXE /S %Disk%:\\putty_github_com.reg;\n\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n\nstart /MIN %Disk%:\\wScite\\SciTE.exe\nstart /MIN %Disk%:\\wScite\\SciTE.exe\n\nExit \n 因為電腦 C:\\ 中存放的可攜系統位於 C:\\2021_cadlab_portable\\data, 因此將此路徑設為 Local 變數, 然後與 Python 即 Portablegit 有關的路徑都使用 %Local% 變數設定. \n 有關 SSH push 設定必須將 putty 系統登錄檔案匯出後, 在啟動隨身系統時載入所需設定.  putty 設定登錄檔案匯出與匯入說明影片 . \n Windows 指令: \n echo off , 而放在前面的  @ 指令說明 . \n set : 設定 環境變數 . \n HomePath, HomeDrive, Home, USERPROFILE 都屬於 Windows 操作系統的 環境變數 . \n HW1-1 : 將左右碰撞移動的紅色方塊, 改為先移動到水平畫面中心點位置後, 接著上下碰撞移動. \n HW1-2 : 加入與  Cango 頁面  Fourbar 程式碼相同功能的啟動按鈕, 讓使用者可以利用按鈕啟動或中斷紅色方塊上下碰撞移動. 完成後請將程式碼存入個人 Gist 區. \n \n HW2 - 可攜程式系統與個人網站佔學期成績 20%. \n HW2 具體項目成果回報區 \n 可攜程式系統與 Python 範例程式收集整理 \n 1. 請準備一個至少 64 GB 大小的 USB 3.0 以上隨身碟 (或外接 SSD), 根據  Task2  中的說明, 建立自己的可攜程式系統.\xa0 \n 2. 請登入 Github 帳號後, 連線至  https://github.com/mdecourse/cp2021_hw  後, 透過  Use this template  按鈕建立自己的 cp2021_hw 倉儲. 並至該倉儲的 Settings -> Pages -> Source 將 main 分支設為 Github Pages 的 root (也就是選擇將倉儲的 main 分支設為對應網站的根目錄). \n 3. 請將 HW1 與 HW2 的作業內容登錄至個人的 cp2021_hw 倉儲與網站中. (學習如何透過 git 指令修改倉儲中的版本內容) \n 4. 請在個人作業網站的 HW2 區域下增設一個 H2 頁面, 將該網頁標題命名為 run, 可以如  run  頁面中的內容, 並且利用此頁面收集 Python 範例程式. (例如: 可自動執行的貪食蛇:  https://mde.tw/cp2021/content/run.html?src=https://gist.githubusercontent.com/mdecourse/d306a1f57e53bfd6466eaae20bcb9439/raw/2160a12b9fec9707a120a383ed5d38b9b78a02cf/snake.py  將  https://gist.github.com/mdecourse/d306a1f57e53bfd6466eaae20bcb9439  作為  https://mde.tw/cp2021/content/run.html  頁面中 src 變數的值, 就可以在頁面中導入程式碼並執行) \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'run1', 'text': '第一種在網頁執行 Brython 程式的方法, 是使用者在網際程式編輯區輸入 Brython 程式碼, 必須手動按下 Run 才能執行. 本網頁 html 的  run1.txt . \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'run1.html'}, {'title': 'W10', 'text': 'W10 之後, 開始執行  HW3  與  Final Project . \n 從 cp2021 課程內容中可知計算機程式的課程目的: \n 鼓勵每一位同學都能及早 確定努力的目標 , 證明自己具備 獨立研究與解題能力 . \n 由於  HW1  的目的在提醒電腦程式的編寫牽涉鍵盤中英文打字, 因此學員必須自行練就 touch typing 的能力, 可正確無誤快速 keyin 所需的程式碼以及相關說明內容. \n HW1  的程式編寫內容是修改一個 Brython 動畫程式, 讓紅色方塊能在使用者視覺暫留時間內移動座標位置, 可在特定位置時改變移動方向. 完成程式修改後則要求將程式碼存入個人的 Gist 區域. \n HW2  則要求使用者建立在 Windows 10 64 位元操作系統中的 Python 可攜程式系統, 主要內容帶有 Python 3.9.5 與 Portablegit 2.31.1 版, 可以用來啟動近端採 Flask 編寫的  https://github.com/mdecourse/cp2021_hw  課程動態網頁, 並用瀏覽器編輯後將動態網頁轉為只帶有 html, css 與 javascript 的靜態網頁後, 推送至 Github Pages 網站中伺服. \n HW2  除了建立可攜程式系統外, 也要求將  HW1  中的 Gist 程式碼, 以  run.txt  ( runsrc ) 的動態內容執行. \n 至於從  HW2  進展到  HW3  網際 Brython 貪食蛇的編寫與修改, 需要: \n \n 配合各種程式語法, 從 教科書導讀 中, 整理 Brython 與 CPython 的程式語法說明 \n 在個人課程網頁中, 整理  4 小時 Python 互動課程 的內容. \n 將線上課程中的 Python  程式範例 , 分門別類改寫為 Brython 程式, 並依照  Practice2  格式以按鈕導入執行. \n 了解  Pathfinding Snake 程式 執行原理 (資料結構與演算法,  搜尋圖解 1,  搜尋圖解 2), 將程式改為 Brython 格式後, 直接在  Practice2  的按鈕中執行. \n \n HW3  Snake Game 的程式設計未來可以發展為 AI 程式競賽 ( Snakes AI Competition 2020 and 2021 Report.pdf ). ( 參考1 ,  參考2 ,  參考3 ,  參考4 ) \n 各學員完成上述各項內容後, 可以自選題目完成  Final Project . \n References: \n https://github.com/mdecourse/snake-game \n https://kevinkparsons.com/snake-game.html \xa0( snake_game in Excel ) \n snake_curses_and_tk.zip \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '1a 抽點 10 位學員 查驗其作業倉儲與網站 ( 1a 學員倉儲與網站 ). \n 1b 抽點 10 位學員 查驗其作業倉儲與網站 ( 1b 學員倉儲與網站 ). \n 教科書 ( Programming with Python ) 2.6 Exercises, 共有三個題目 (1b 上課範例 - 倉儲  w11_1b  網站  https://mde.tw/w11_1b ): \n \n \n 請分別在個人網頁上利用  Examples.txt  製作一個標題為 W11 的 H2 頁面, 並將上列解題程式製作為按鈕 (button). \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W11 demo', 'text': 'Examples \n w11demo.txt \n 以下為  https://mde.tw/cp2021_hw/content/W11.html  按鈕範例. \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕. (本動態頁面檔案  Examples.txt ) \n 1. 從 1 累加到 100 (以下列 button 呈現). \n 2. 教科書 ( Programming with Python ) 2.6 Exercises, 共有三個題目, 請分別將程式製作為按鈕 (button). \n 3. 請利用  Canvas  繪製 Fig. 3.7 的流程圖 (Flow Chart). \n 4. 請利用 Canvas 繪製你所編寫"從 1 累加到 10"程式的流程圖 (Flow Chart). \n 5. 請各班各組合力完成 3.5 Exercises 中的 14 個題目. \n 6. 請各組從 4.3 Exercises 中選擇一個題目製作為頁面中的按鈕 (button). \n 無  Canvas  繪圖需求的程式, 可放在第一區, 而採  Canvas  繪圖的程式則可放入第二區. \n 將 Gist 中的程式導入本頁面的程式段:  brython_button_prog.txt , 只要配合 button id 對應即可導入編輯區. \n 1 add to 100 p261 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  內建程式 1 ####################################### 內建程式 1 開始 \n \n \n \n  內建程式 1 ####################################### 內建程式 1 結束 \n \n  button 程式 1 ####################################### button 程式 1 開始 \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  editor1 結束  \n \n  button 程式 1 ####################################### button 程式 1 結束 \n \n  button 程式 2 ####################################### button 程式 2 開始 \n 第二編輯區程式 ( 編輯  Snake 原始碼): \n 查驗輸入字串 Snake Snake2 \n  判斷輸入字串是否aA1$, 且至少 8 個字元-開始  \n \n \n  判斷輸入字串是否aA1$, 且至少 8 個字元-結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  editor2 結束  \n \n  button 程式 2 ####################################### button 程式 2  結束 \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n References: \n https://zerojudge.tw/ \n https://shaform.com/csdream/docs/problem-solving/ \n https://onlinejudge.org/ \n', 'tags': '', 'url': 'W11 demo.html'}, {'title': 'W12 demo', 'text': 'w12demo.txt \n ROC 國旗規格 . \n PROC 國旗規格  - 可以根據此規格定義, 新增  PROC flag  按鈕. \n USA 國旗規格  - 可以根據此規格定義, 新增  USA flag  按鈕. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n add 1 to 100 p261 ROC flag \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n', 'tags': '', 'url': 'W12 demo.html'}, {'title': 'Snakey', 'text': 'https://onlinejudge.org/ \n', 'tags': '', 'url': 'Snakey.html'}, {'title': 'W12', 'text': 'Why Fossil SCM is an excellent choice for introductory programming courses \n http://brandon.invergo.net/news/2013-07-11-A-quick-introduction-to-version-control-with-Fossil.html \n https://fossil-scm.org/home/doc/trunk/www/quickstart.wiki \n https://fossil-scm.org/home/doc/trunk/www/th1.md \n https://www.fossil-scm.org/home/doc/trunk/www/adding_code.wiki \n http://www.beedub.com/book/tkbook.pdf \n Essentials of TCL \n 最原始的 Snakey.py 是在 CPython 命令列中, 利用  Python curses  執行. 這裡將要逐步改為能透過 Brython 直接在網頁中執行. 初步將無法在 Brython 環境運作的程式碼轉為 comment 的  Snakey.py . \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  內建程式碼導入 \n  以按鈕導入 snakey.py 程式碼  \n Snakey \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n References: \n https://blog.csdn.net/fox64194167/article/details/19965069 \n http://www.waitingfy.com/archives/846 \n https://github.com/mdecourse/snake-4 \n', 'tags': '', 'url': 'W12.html'}, {'title': 'HW3', 'text': '\n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'Final Project', 'text': 'Final Project 佔學期成績 30% \n Final Project 具體項目成果回報區 \n', 'tags': '', 'url': 'Final Project.html'}, {'title': 'test', 'text': '期末測驗 \n', 'tags': '', 'url': 'test.html'}, {'title': '41023136', 'text': 'Final Project \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n hw hw1-1 exam(1加到10) 列出10個座標 貪食蛇 final1 final2 \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n', 'tags': '', 'url': '41023136.html'}]};