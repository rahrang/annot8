// React
import React from 'react';

// NPM Modules
import { css, StyleSheet } from 'aphrodite';
import { fadeIn } from 'react-animations';

export default class About extends React.Component {
  render() {
    return (
      <div className={css(styles.aboutContainer, styles.fadeIn)}>
        <h2 className={css(styles.header)}>About Annot8</h2>
        <p className={css(styles.tagline)}>
          Annot8 is your solution to not attending lecture.
        </p>
        <div className={css(styles.sectionContainer)}>
          <h3 className={css(styles.sectionHeader)}>What We Do</h3>
          <p className={css(styles.paragraph)}>
            Annot8 makes your life easier. Our web application allows you to
            live-comment on YouTube videos and discuss material with other
            people watching the same video. Start a comment thread at a certain
            timestamp in the video and watch people reply when they hit that
            point in the video.
          </p>
        </div>
        <div className={css(styles.sectionContainer)}>
          <h3 className={css(styles.sectionHeader)}>Our Target Audience</h3>
          <p className={css(styles.paragraph)}>
            We created Annot8 with UC Berkeley students in mind. Because so many
            of us have busy schedules and often resort to watching webcasts
            rather than attending lectures in person, it's often difficult for
            us to ask for clarification on concepts presented in lecture if we
            are not there to ask the professor in person. Annot8 encourages
            students to ask questions at particular timestamps the material is
            unclear. We provide a platform for other students and even course
            staff to respond to these comments, explaining concepts and
            answering questions with Annot8.
          </p>
        </div>
        <div className={css(styles.sectionContainer)}>
          <h3 className={css(styles.sectionHeader)}>Why You Should Annot8</h3>
          <p className={css(styles.paragraph)}>
            You may ask, "How is this different from the YouTube comment
            section?" or "How is this different from Piazza?" Well, UC Berkeley
            disables YouTube comments on webcasted lectures, and Piazza does not
            support a seamless video integration. If a student asked for help
            with a video timestamp on Piazza, few people would see that question
            because not every student is checking every single Piazza post all
            the time.{' '}
          </p>
          <p className={css(styles.paragraph)}>
            Annot8 offers a new experience to watching webcasts. A significant
            amount of students do watch webcasts, and we believe that students'
            questions will be more visible when they pop up as other students
            are also watching lecture and may even have the same questions, or
            have the ability to answer those questions.{' '}
          </p>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  aboutContainer: {
    display: 'flex',
    flexDirection: 'column'
  },

  header: {
    borderBottom: '3px solid #3F7BA9',
    color: '#333',
    fontFamily: 'Fjalla One, sans-serif',
    fontSize: '2em',
    margin: '20px auto',
    textAlign: 'center',
    textTransform: 'uppercase',
    width: '200px'
  },

  tagline: {
    color: '#666',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1.125em',
    margin: '5px 0',
    padding: '0',
    textAlign: 'center'
  },

  sectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    textAlign: 'left',
    padding: '20px 120px'
  },

  sectionHeader: {
    borderBottom: '3px solid #3F7BA9',
    color: '#333',
    fontFamily: 'Fjalla One, sans-serif',
    fontSize: '1.25em',
    textAlign: 'left',
    margin: '5px 0',
    padding: '5px 2px'
  },

  paragraph: {
    color: '#666',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1.125em',
    textAlign: 'left',
    margin: '5px 0',
    padding: '0'
  },

  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s'
  }
});
