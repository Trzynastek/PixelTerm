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
            /green/::/end/ /magenta/help/end/ /black/- displays this message/end/<br>
            /green/::/end/ /magenta/ls/end/ /black/- displays contents of current the directory/end/<br>
            /green/::/end/ /magenta/neofetch/end/ /black/- displays system info/end/<br>
            /green/::/end/ /magenta/splash/end/ /black/- displays splashs message/end/`,
    intro: `/magenta/<p class="ascii">█ █ █▀▀ █   █   █▀█     █ █ █ █▀█ █▀█ █   █▀▄ █<br>█▀█ ██▄ █▄▄ █▄▄ █▄█ █   ▀▄▀▄▀ █▄█ █▀▄ █▄▄ █▄▀ ▄</p><br>
            /end//b/This is a interactive terminal style portfolio website developed by/green/ ☛ <span style="cursor: pointer;" onclick="location.href='https://github.com/Trzynastek'">Trzynu</span>/end/<br>
            /yellow/🛈/end/ Type/magenta/ help/end/ to display list of all aviable commands./end/`,
    about: `/b/My name is Trzynu, I'm a self-taught front-end developer and graphic designer.<br>
            I'm currently studying at a technical school in Poland.<br>
            My goal is to become a front-end developer /end/`,
    credits: `/b//magenta/Website developed by /green/ ☛ <span style="cursor: pointer;" onclick="location.href='https://github.com/Trzynastek'">Trzynu</span>/end/`,
}
cmdlist = {
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
        if (Object.keys(current).includes(target[0])) {
            current = current[target[0]]
        } else if (target[0] == '..') {
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
        if (file[0] && file[0].length > 0) {
            if (extensions.includes(file[0].split('.')[1])) {
                if (current.includes(file[0])) {
                    console.log(file[0], file[0].slice(0, - (file[0].split('.')[1].length + 1)))
                    cmdlist[file[0].slice(0, - (file[0].split('.')[1].length + 1))]()
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
    }
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
    Projects: {
        test: {
            test2: {

            },
        },
    },
    Commands: [
        'about.txt',
        'help.txt',
        'splash.txt',
    ]
}