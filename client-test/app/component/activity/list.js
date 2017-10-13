import React, { Component } from 'react';
import { Table, Button } from 'antd';
import { connect } from 'react-redux';
import activitylist from 'actions/activity/list'
import './list.less'

const columns =  [{
  title: '项目名称',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '创建人',
  dataIndex: 'founder',
  key: 'founder',
}, {
  title: '创建时间',
  dataIndex: 'time',
  key: 'time',
}, {
  title: '操作',
  dataIndex: 'operation',
  key: 'view',
  render: (text) => {
    return (
      <a>{text}</a>
    )
  }
}];

class ActivityList extends Component {
  constructor(props) {
    super(props);
    this.props.activitylist();
  }
  render() {
    return (
      <div className="activity_page">
        <div className="activity_header">
          <span className="activity_list_title">项目列表</span>
          <Button className="create_activity" type="primary" icon="plus">创建项目</Button>
         </div>
        <div className="activity_list">
          <Table rowKey="activity_id" columns={columns} dataSource={this.props.activity.list} />
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    activity : {
      list: state.activity.list
    }
  };
};
export default connect(
  mapStateToProps,
  {
    activitylist
  }
)(ActivityList);