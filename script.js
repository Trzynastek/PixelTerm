terminal = document.getElementById('terminal')
document.addEventListener("keydown", function(e) {
    if (e.key == 'Backspace') {
        if (terminal.innerHTML.charAt(terminal.innerHTML.length - 1) != '>') {
            remove()
            cursor('blink')
        }
    } else if (e.key == 'Enter') {
        terminal.innerHTML += '<br>'
        enter()
    } else  if (banned.includes(e.key)) {
        if (e.key == 'ArrowUp') {
            e.preventDefault()
            history('up')
            loc = terminal.innerHTML.length
        } else if (e.key == 'ArrowDown') {
            e.preventDefault()
            history('down')
            loc = terminal.innerHTML.length
        } else if (e.key == 'ArrowLeft') {
            e.preventDefault()
            cursor('move', -1)
        } else if (e.key == 'ArrowRight') {
            e.preventDefault()
            cursor('move', 1)
        }
    } else {
        insert(e.key)
        loc += 1
        cursor('blink')
    }
})
function enter() {
    input = terminal.innerHTML.split('<br>')
    last = input.length -2
    command = input[last].substring(display('theme', true).length)
    if (command.substring(1, 0) == ' ') {
        command = command.substring(1)
    }
    command = command.replaceAll(defs['cursoralt'], '')
    command = command.replaceAll(defs['cursor'], '')
    history('add', command)
    run(command)
    if (command[0] == 'cd' || command[0] == 'neofetch') {
        terminal.innerHTML += '<br>'
    } else {
        if (command != 'clear') {
            terminal.innerHTML += '<br><br>'
        }
    }
    display('theme')
    window.scrollTo(0, document.body.scrollHeight)
    loc = terminal.innerHTML.length
    cursor('blink')
}
function history(operation, input) {
    if (operation == 'add') {
        if (input.length > 0) {
            hist = hist.reverse()
            hist.push(input)
            hist = hist.reverse()
        }
    } else if (operation == 'up') {
        if (hist[pos + 1]) {
            last = terminal.innerHTML.trim().split('<br>')
            last = last.pop().length
            terminal.innerHTML = terminal.innerHTML.slice(0, -(last))
            terminal.innerHTML += display('theme', true)
            terminal.innerHTML += hist[pos+1]
            pos += 1
        }
    } else if (operation == 'down') {
        if (hist[pos - 1]) {
            last = terminal.innerHTML.trim().split('<br>')
            last = last.pop().length
            terminal.innerHTML = terminal.innerHTML.slice(0, -(last))
            terminal.innerHTML += display('theme', true)
            terminal.innerHTML += hist[pos-1]
            pos -= 1
        }
    }
}
function run(input) {
    command = input.split(' ')
    if (command[0] in cmdlist) {
        cmdlist[command[0]](command[1])
        console.log(command[0])
        console.log(command[1])
    } else {
        display('e1')
    }
}
function display(id, r, c) {
    if (!c) {
        output = msg[id]
    } else {
        output = c
    }
    output = output.replace(/\/\w+\//g, (match) => {
        const tag = match.slice(1, -1)
        const color = defs[tag]
        if (color) {
            return `<span style='color:${color}'>`
        } else if (tag === 'end') {
            return `</span>`
        } else if (tag === 'b') {
            return `<span class='bold'>`
        } else if (tag === 'i') {
            return `<span class='italic'>`
        } else {
            return match
        }
      })
    if (r) {
        return output
    } else {
        terminal.innerHTML += output
    }
}
async function cursor(action, value) {
    if (action == 'move') {
        if (terminal.innerHTML.charAt(loc+value) != '<' && terminal.innerHTML.charAt(loc+value) != '>' && terminal.innerHTML.charAt(loc+value) != '') {
            loc += value
            cursor('blink')
        }
    } else if (action == 'blink') {
        terminal.innerHTML = terminal.innerHTML.replaceAll(defs['cursoralt'], '')
        terminal.innerHTML = terminal.innerHTML.replaceAll(defs['cursor'], '')
        terminal.innerHTML = terminal.innerHTML.slice(0, loc) + defs['cursor'] + terminal.innerHTML.slice(loc)
        setTimeout(async function() {
            terminal.innerHTML = terminal.innerHTML.replaceAll(defs['cursor'], defs['cursoralt'])
        }, 500)
    }
}
function insert(value) {
    terminal.innerHTML = terminal.innerHTML.slice(0, loc) + value+ terminal.innerHTML.slice(loc)
}
function remove() {
    terminal.innerHTML = terminal.innerHTML.replaceAll(defs['cursoralt'], '')
    terminal.innerHTML = terminal.innerHTML.replaceAll(defs['cursor'], '')
    terminal.innerHTML = terminal.innerHTML.slice(0, loc-1) + terminal.innerHTML.slice(loc)
    loc -= 1
}
setInterval(async function() {
    cursor('blink')
}, 1000)
document.body.style.backgroundColor = defs['background']
document.body.style.color = defs['foreground']
document.documentElement.style.setProperty('--link', defs['green'])
current = directory
run('splash')
terminal.innerHTML += '<br><br>'
display('theme')
loc = terminal.innerHTML.length