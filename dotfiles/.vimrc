" Plugins
runtime! macros/matchit.vim " Jump between matching brackets, do/end, etc.
filetype plugin indent on   " Detect file type and load plugins. Ref: https://vi.stackexchange.com/a/10125

" File read/write
set autoread      " Automatically read the current file when changed outside of Vim
set autowrite     " Automatically :write before running commands
set nobackup      " Do not create a backup file on save
set noswapfile    " http://robots.thoughtbot.com/post/18739402579/global-gitignore#comment-458413287

" Tabs
set smarttab 
set tabstop=2
set autoindent    " Copy indent from current line when starting a new line 
set shiftwidth=2
set shiftround
set expandtab

" Display 
syntax on
set list listchars=tab:»·,trail:·,nbsp:·
set display+=lastline " Display as much of the last line as possible
set linebreak
set number
set numberwidth=5
set ruler            " Show the cursor position all the time
set laststatus=2     " Always display the status line
set showcmd          " Display incomplete commands

" Scrolling
set scrolloff=1     " Show at least 1 line above and below cursor 
set sidescrolloff=5 " Show at least 5 characters on either side of cursor

" Autocomplete
set wildmenu    " Use tab autocomplete in menus
set complete-=i " Autocomplete based on current and included files

" Misc
set backspace=2   " Backspace deletes like most programs in insert mode
set history=100
set incsearch     " Do incremental searching (Fuzzy search)
