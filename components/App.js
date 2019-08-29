App = React.createClass ({

    getInitialState() {
        return {
            loading: false,
            searchingText: '',
            gif: {}
        };
    },

    render: function() {
        var styles = {
            margin: '0 auto',
            textAlign: 'center',
            width: '90%'
        };

        return (
            <div style={styles}>
                <h1>Wyszukiwarka gifow</h1>
                <p>Znajdz gifa na <a href='http://giphy.com'>giphy</a>Naciskaj enter, aby pobrac kolejne giphy</p>
                <Search />
                <Gif
                    loading={this.state.loading}
                    url={this.state.gif.url}
                    sourceUrl={this.state.gif.sourceUrl}
                />
            </div>
        );
    }
});