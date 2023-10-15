const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <img src="https://images.unsplash.com/photo-1669949060555-0b56db6858a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80"
                alt="confused cat laying down" />
                <div>
                    Photo by <a href="https://unsplash.com/@ohige_master?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Hong Shangu</a> on <a href="https://unsplash.com/photos/vQ_bfUUC8rM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404