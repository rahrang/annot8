// React
import React from "react";

// NPM Modules
import { connect } from "react-redux";
import { css, StyleSheet } from "aphrodite";
import * as _ from "lodash";
import ReactTable from "react-table";
import "react-table/react-table.css";

// Local Components
import { CommentActions } from "../actions/comment-actions.js";
const helpers = require("../helpers.js");

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    let { authReducer } = this.props;
    if (_.isEmpty(authReducer.user)) {
      this.notLoggedIn = setTimeout(
        function() {
          this.props.history.replace("/");
        }.bind(this),
        2000
      );
    } else {
      this.pullComments();
    }
  }

  pullComments = async () => {
    await this.props.fetchUserComments();
  };

  render() {
    let { commentsReducer } = this.props;
    return (
      <div className={css(styles.profileContainer, styles.fadeIn)}>
        <div className={css(styles.headerContainer)}>
          <h2 className={css(styles.header)}>Your Profile</h2>
          <a href="/api/logout" className={css(styles.link)}>
            Sign Out
          </a>
        </div>
        <div className={css(styles.tableContainer)}>
          <ReactTable
            className={css(tableStyles.table) + " -highlight"}
            data={commentsReducer.user_comments}
            columns={columns}
            defaultPageSize={10}
            showPageSizeOptions={true}
            resizable={false}
            pageText=""
            ofText="/"
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authReducer: state.authReducer,
    commentsReducer: state.commentsReducer
  };
}

export default connect(mapStateToProps, CommentActions)(Profile);

const styles = StyleSheet.create({
  profileContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
    minHeight: "100%"
  },

  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    margin: "10px 0"
  },

  header: {
    color: "#3F7BA9",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "1.5em",
    margin: "0 20px",
    padding: "0"
  },

  link: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    border: "3px solid #3F7BA9",
    color: "#333",
    cursor: "pointer",
    fontFamily: "Fjalla One, sans-serif",
    fontSize: "1em",
    fontWeight: "bold",
    letterSpacing: "0.035em",
    margin: "0 20px",
    padding: "5px 10px",
    textDecoration: "none",
    textTransform: "uppercase",
    ":hover": {
      backgroundColor: "#3F7BA9",
      color: "#F5F5F5"
    }
  },

  tableContainer: {
    width: "100%",
    padding: "10px 0"
  }
});

const tableStyles = StyleSheet.create({
  table: {
    // backgroundColor: 'white', // comment in to remove the box shadow on the react table
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none"
  },

  cell: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: "0.9em",
    display: "flex",
    alignItems: "center",
    minHeight: "45px",
    overflowX: "auto",
    overflowY: "hidden"
  },

  centered: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center"
  },

  columnName: {
    borderLeft: "none",
    borderRight: "none",
    color: "#333",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "0.9em",
    fontWeight: "bold",
    letterSpacing: "0.0125em",
    minHeight: "45px"
  }
});

const columns = [
  {
    Header: "Video ID",
    accessor: "videoId",
    className: css(tableStyles.table, tableStyles.cell, tableStyles.centered),
    headerClassName: css(tableStyles.columnName),
    width: 125
  },
  {
    Header: "Posted",
    accessor: "datePosted",
    Cell: props => {
      return helpers.getTimeElapsed(props.value);
    },
    className: css(tableStyles.table, tableStyles.cell, tableStyles.centered),
    headerClassName: css(tableStyles.columnName),
    width: 200
  },
  {
    Header: "Timestamp",
    accessor: "timestamp",
    Cell: props => {
      return helpers.formatTime(props.value);
    },
    className: css(tableStyles.table, tableStyles.cell, tableStyles.centered),
    headerClassName: css(tableStyles.columnName),
    width: 100
  },
  {
    Header: "Comment",
    accessor: "text",
    className: css(tableStyles.table, tableStyles.cell, tableStyles.centered),
    headerClassName: css(tableStyles.columnName)
  }
  // {
  //   Header: "Resolved",
  //   accessor: "isResolved",
  //   className: css(tableStyles.table, tableStyles.cell, tableStyles.centered),
  //   headerClassName: css(tableStyles.columnName),
  //   width: 100
  // }
];
