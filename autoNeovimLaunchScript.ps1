# Define the base directory path
$baseDir = "\SIM-year1-base\term-1.1\ITP\Game-project\Submission\final-sub-folder\Platformania!"

# Function to create a new tab and execute commands
function CreateNewTab($title, $commands) {
    $wshell.SendKeys("^+t")
    Start-Sleep -Milliseconds 500
    $wshell.SendKeys("cd $baseDir{ENTER}")
    $wshell.SendKeys('$Host.UI.RawUI.WindowTitle = "' + $title + '"')
    $wshell.SendKeys("{ENTER}")
    foreach ($command in $commands) {
        $wshell.SendKeys("$command{ENTER}")
    }
    Start-Sleep -Milliseconds 500
}

# Start Windows Terminal
$wshell = New-Object -ComObject wscript.shell
$wshell.AppActivate("Windows Terminal")

# Sleep for a moment to let the Windows Terminal session start
Start-Sleep -Seconds 2

# Tab 1
$commands = @('$Host.UI.RawUI.WindowTitle = "Documentation"', 'nvim todo.txt')
CreateNewTab "Documentation" $commands

# Tab 2
$commands = @('$Host.UI.RawUI.WindowTitle = "Logic Files"', 'nvim sketch.js')
CreateNewTab "Logic Files" $commands

# Tab 3
$commands = @('$Host.UI.RawUI.WindowTitle = "Drawing Files"', 'nvim .')
CreateNewTab "Drawing Files" $commands

# Tab 4
$commands = @('$Host.UI.RawUI.WindowTitle = "Toucher"')
CreateNewTab "Toucher" $commands

# Tab 5
$commands = @('$Host.UI.RawUI.WindowTitle = "Server"', 'cd.. && live-server Platformania!')
CreateNewTab "Server" $commands

# Tab 6
$commands = @('$Host.UI.RawUI.WindowTitle = "Git"', 'git log')
CreateNewTab "Git" $commands

