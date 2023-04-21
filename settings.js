hist = []
pos = -1
banned = [
    '<',
    '>',
    'Shift',
    'Control',
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp',
    'ArrowDown',
    'Alt',
    'Tab',
    'OS'
]
neofetch = {
    height: 9,
    ascii: [
        ' ■ ■ ■ ■ ■ ■ ■ ■ ■ ',
        ' ■ ■ ■ ■ ■ ■ ■ ■ ■ ',
        ' ■ ■ ■ ■ ■ ■ ■ ■ ■ ',
        '       ■ ■ ■       ',
        '       ■ ■ ■       ',
        '       ■ ■ ■       ',
        '       ■ ■ ■       ',
        '       ■ ■ ■       ',
        '       ■ ■ ■       ',
    ],
    text: [
        '/magenta/MateuszSocha@trzynu/end/',
        '-------------------------------------------------',
        '/blue/Age/end/: 17',
        '/blue/Country/end/: Poland',
        '/blue/Languages/end/: English, Polish',
        '/blue/Apps/end/: VSCode, AdobeXD, Figma, Blender, Blockbench',
        '/blue/Skills/end/: HTML, CSS, JavaScript, Python, UI Design',
        '/blue/GitHub/end/: <a href="https://github.com/Trzynstek">https://github.com/Trzynstek</a>',
        '/blue/Discord/end/: Trzynu#3121',
    ]
}
msg = {
    theme: `/green/❯/end/<span> </span>`,
    e1: `/b//red/✖ ERROR: Command not found/end//end/`,
    e2: `/b//red/✖ ERROR: Invalid directory/end//end/<br>`,
    e3: `/b//red/✖ ERROR: Invalid file/end//end/`,
    e4: `/b//red/✖ ERROR: Not a file/end//end/`,
    help: `/b/List of avialable commands<br>
            /green/::/end/ /magenta/about/end/ /black/- displays the about section/end/<br>
            /green/::/end/ /magenta/cat/end/ /black/- displays contents of a file/end/<br>
            /green/::/end/ /magenta/cd/end/ /black/- navigates directories/end/<br>
            /green/::/end/ /magenta/clear/end/ /black/- clears the terminal/end/<br>
            /green/::/end/ /magenta/credits/end/ /black/- displays credits/end/<br>
            /green/::/end/ /magenta/help/end/ /black/- displays this message/end/<br>
            /green/::/end/ /magenta/ls/end/ /black/- displays contents of current the directory/end/<br>
            /green/::/end/ /magenta/lshw/end/ /black/- displays list of my PC components/end/<br>
            /green/::/end/ /magenta/neofetch/end/ /black/- displays system info/end/<br>
            /green/::/end/ /magenta/splash/end/ /black/- displays splashs message/end/`,
    intro: `/magenta/<p class="ascii">█ █ █▀▀ █   █   █▀█     █ █ █ █▀█ █▀█ █   █▀▄ █<br>█▀█ ██▄ █▄▄ █▄▄ █▄█ █   ▀▄▀▄▀ █▄█ █▀▄ █▄▄ █▄▀ ▄</p><br>
            /end//b/This is a interactive terminal style portfolio website developed by/green/ ☛ <span style="cursor: pointer;" onclick="location.href='https://github.com/Trzynastek'">Trzynu</span>/end/<br>
            /yellow/🛈/end/ Type/magenta/ help/end/ to display list of all aviable commands./end/`,
    about: `/b/My name is Trzynu, I'm a self-taught front-end developer and graphic designer.<br>
            I'm currently studying at a technical school in Poland.<br>
            My goal is to become a front-end developer /end/`,
    credits: `/b//magenta/Website developed by /green/ ☛ <span style="cursor: pointer;" onclick="location.href='https://github.com/Trzynastek'">Trzynu</span>/end/`,
    PixelTerm: `/b//magenta/PixelTerm/end/ is a terminal style portfolio website /black/(this one)/end/.<br>
                /green/ ☛ <span style="cursor: pointer;" onclick="location.href='https://github.com/Trzynastek/PixelTerm'">View on GitHub</span>/end//end/`,
    PixelPage: `/b//magenta/PixelPage/end/ is a modern and simple browser homepage inspired by /green/ ☛ <span style="cursor: pointer;" onclick="location.href='https://github.com/migueravila/Bento'">Bento</span>/end/.<br>
                /green/ ☛ <span style="cursor: pointer;" onclick="location.href='https://github.com/Trzynastek/PixelPage'">View on GitHub</span>/end//end/`,
    PixelWordle: `/b//magenta/PixelWordle/end/ is a simple /green/ ☛ <span style="cursor: pointer;" onclick="location.href='https://www.nytimes.com/games/wordle/index.html'">Wordle</span>/end/ recreation with a few additions.<br>
                /green/ ☛ <span style="cursor: pointer;" onclick="location.href='https://github.com/Trzynastek/PixelWordle'">View on GitHub</span>/end/<br>
                /blue/ ☛ <span style="cursor: pointer;" onclick="location.href='https://PixelWordle.vercel.app'">View website</span>/end//end/`,
    Atlas: `/b//magenta/Atlas/end/ is a library of pirated sgames and software created to make downloading them safer and easier.<br>
            /green/ ☛ <span style="cursor: pointer;" onclick="location.href='https://github.com/Trzynastek/Atlas'">View on GitHub</span>/end/<br>
            /blue/ ☛ <span style="cursor: pointer;" onclick="location.href='https://atlas-azure.vercel.app'">View website</span>/end//end/`,
    KeyTest: `/b//magenta/KeyTest/end/ is a simple typing speed test, tho' it isn't really finished and has a lot of bugs.<br>
                /green/ ☛ <span style="cursor: pointer;" onclick="location.href='https://github.com/Trzynastek/KeyTest'">View on GitHub</span>/end/<br>
                /blue/ ☛ <span style="cursor: pointer;" onclick="location.href='https://key-test.vercel.app'">View website</span>/end//end/`,
    lshw: `/b//magenta/CPU/end/: Ryzen 5 3600<br>
            /magenta/GPU/end/: Radeon Rx 6600 xt<br>
            /magenta/RAM/end/: DDR4 16 GB 3000mhz/end/`,
}
cmdlist = {
    PixelTerm: function () {
        display('PixelTerm')
    },
    PixelPage: function () {
        display('PixelPage')
    },
    PixelWordle: function () {
        display('PixelWordle')
    },
    Atlas: function () {
        display('Atlas')
    },
    KeyTest: function () {
        display('KeyTest')
    },
    lshw: function() {
        display('lshw')
    },
    help: function() {
        display('help')
    },
    credits: function() {
        display('credits')
    },
    clear: function() {
        terminal.innerHTML = ''
    },
    splash: function() {
        display('intro')
    },
    about: function() {
        display('about')
    },
    ls: function() {
        if (Array.isArray(current)) {
            dir = current
        } else {
            dir = Object.keys(current)
        }
        for (i = 0; i < dir.length; i++) {
            terminal.innerHTML += dir[i] + ' '
        }
    },
    cd: function(target) {
        if (Object.keys(current).includes(target)) {
            current = current[target]
        } else if (target == '..') {
            path = terminal.innerHTML.split('>').pop().trim().split('.')
            path.pop()
            parentKey = path.join('.')
            if (parentKey == '') {
                current = directory
            } else {
                current = eval('directory.' + parentKey)
            }
        } else {
            display('e2')
        }
    },
    cat: function(file) {
        if (file && file.length > 0) {
            if (extensions.includes(file.split('.')[1])) {
                if (current.includes(file)) {
                    console.log(file.slice(0, - (file.split('.')[1].length + 1)))
                    cmdlist[file.slice(0, - (file.split('.')[1].length + 1))]()
                } else {
                    display('e3')
                }
            } else {
                display('e4')
            }
        } else {
            display('e3')
        }
    },
    neofetch: function() {
        for (i = 0; i < neofetch.height; i++) {
            display('null', false, `<span class='ascii'>${neofetch.ascii[i]}     </span>`)
            display('null', false, neofetch.text[i])
            display('null', false, '<br>')
        }
    },
}
defs = {
    background: '#1a1b26',
    foreground: '#cfc9c2',
    black:      '#414868',
    red:        '#f7768e',
    green:      '#9ece6a',
    yellow:     '#e0af68',
    blue:       '#7aa2f7',
    magenta:    '#bb9af7',
    cyan:       '#2ac3de',
    white:      '#9699a8',
}   
extensions = [
    'sh',
    'txt',
]
directory = {
    Projects: [
        'PixelTerm.txt',
        'PixelPage.txt',
        'PixelWordle.txt',
        'Atlas.txt',
        'KeyTest.txt',
    ],
}