import React, { Component } from 'react';
import FullArticleScreen from './FullArticleScreen';

class FullScreen extends Component {
    state = {
        gotTitle: '',
        gotText: '',
        gotDescription: '',
    };

    goToArticles = () => this.props.navigation.navigate('MainArticle');

    componentDidMount() {
        const currentTitle = this.props.navigation.getParam('title');
        const cureentText = this.props.navigation.getParam('text');
        const currentDescription = this.props.navigation.getParam('description');

        this.setState({
            gotTitle: currentTitle, 
            gotText: cureentText,
            gotDescription: currentDescription,
        });
    };

    render() {
        return(
            <FullArticleScreen
                goBack={this.goToArticles} 
                title={this.state.gotTitle}
                text={this.state.gotText}
                description={this.state.gotDescription}
            />
        );
    }
}

export default FullScreen
