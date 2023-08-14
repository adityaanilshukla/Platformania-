
#auto script for launching this project
#saves the trouble of creating six tabs in powershll

# Start Windows Terminal
Start-Process wt

# Sleep for a moment to let the Windows Terminal session start
Start-Sleep -Seconds 2

# Send shortcut keys to create new tabs and navigate to the desired directory
$wshell = New-Object -ComObject wscript.shell
$wshell.AppActivate("Windows Terminal")

# Tab 1
Start-Sleep -Milliseconds 500
$wshell.SendKeys("cd \SIM-year1-base\term-1.1\ITP\Game-project\Submission\final-sub-folder\Platformania!{ENTER}")
$wshell.SendKeys('$Host.UI.RawUI.WindowTitle = "text files"')
$wshell.SendKeys("{ENTER}")
$wshell.SendKeys("nvim todo.txt{ENTER}")
Start-Sleep -Milliseconds 500

# Tab 2
$wshell.SendKeys("^+t")
Start-Sleep -Milliseconds 500
$wshell.SendKeys("cd \SIM-year1-base\term-1.1\ITP\Game-project\Submission\final-sub-folder\Platformania!{ENTER}")
$wshell.SendKeys('$Host.UI.RawUI.WindowTitle = "logic files"')
$wshell.SendKeys("{ENTER}")
$wshell.SendKeys("nvim .{ENTER}")
Start-Sleep -Milliseconds 500

# Tab 3
$wshell.SendKeys("^+t")
Start-Sleep -Milliseconds 500
$wshell.SendKeys("cd \SIM-year1-base\term-1.1\ITP\Game-project\Submission\final-sub-folder\Platformania!{ENTER}")
$wshell.SendKeys('$Host.UI.RawUI.WindowTitle = "drawing files"')
$wshell.SendKeys("{ENTER}")
$wshell.SendKeys("nvim .{ENTER}")
Start-Sleep -Milliseconds 500


# Tab 4
$wshell.SendKeys("^+t")
Start-Sleep -Milliseconds 500
$wshell.SendKeys("cd \SIM-year1-base\term-1.1\ITP\Game-project\Submission\final-sub-folder\Platformania!{ENTER}")
$wshell.SendKeys('$Host.UI.RawUI.WindowTitle = "toucher"')
$wshell.SendKeys("{ENTER}")
Start-Sleep -Milliseconds 500 

# Tab 4
$wshell.SendKeys("^+t")
Start-Sleep -Milliseconds 500
$wshell.SendKeys("cd \SIM-year1-base\term-1.1\ITP\Game-project\Submission\final-sub-folder\{ENTER}")
$wshell.SendKeys('$Host.UI.RawUI.WindowTitle = "server"')
$wshell.SendKeys("{ENTER}")
$wshell.SendKeys("live-server Platformania!")
$wshell.SendKeys("{ENTER}")
Start-Sleep -Milliseconds 500

# Tab 5
$wshell.SendKeys("^+t")
Start-Sleep -Milliseconds 500
$wshell.SendKeys("cd \SIM-year1-base\term-1.1\ITP\Game-project\Submission\final-sub-folder\Platformania!{ENTER}")
$wshell.SendKeys('$Host.UI.RawUI.WindowTitle = "Git"')
$wshell.SendKeys("{ENTER}")
$wshell.SendKeys("git log")
$wshell.SendKeys("{ENTER}")
Start-Sleep -Milliseconds 500
