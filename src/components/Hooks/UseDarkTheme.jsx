import React from 'react'

function UseDarkTheme() {
    const [ theme, setTheme ] = React.useState(localStorage.getItem("theme"));
    const colorTheme = theme === 'dark' ? 'light' : 'dark';

    React.useEffect(()=>{
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem('theme', theme)
    }, [theme, setTheme])
  return [colorTheme, setTheme]
}

export default UseDarkTheme