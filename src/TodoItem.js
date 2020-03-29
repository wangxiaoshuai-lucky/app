import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {

    deleteItem() {
        const { deleteItem, index } = this.props;
        deleteItem(index);
    }

    // 是否重复更新渲染组件
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.content !== this.props.content
    }

    render() {
        const { content } = this.props;
        return (
            <li
                onClick={this.deleteItem.bind(this)}
                dangerouslySetInnerHTML={{ __html: content }}
            >
            </li>
        )
    }
}
TodoItem.propTypes = {
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}

TodoItem.defaultProps = {
    content: 'default-content',
}

export default TodoItem;