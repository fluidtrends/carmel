import React from 'react'
import { Component } from 'react-dom-chunky'
import { Card, Icon, Button, Popover } from 'antd'
import { Chip, ChipText, ChipSet } from '@rmwc/chip'
import { Typography } from '@rmwc/typography'
import { Ribbon } from './styledComponents'

export default class QuestCard extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    super.componentDidMount()
  }

  renderSkills() {
    const category = Object.keys(this.props.quest.skills)

    return (
      <Typography
        use="headline5"
        tag="div"
        style={{
          color: '#90A4AE',
          textAlign: 'left',
          padding: '0px'
        }}
      >
        <ChipSet style={{ margin: '0px' }}>
          {category.map(cat => (
            <Chip
              id={cat}
              onInteraction={evt =>
                this.props.onCategoryClick
                  ? this.props.onCategoryClick(evt.detail.chipId)
                  : false
              }
              style={{ backgroundColor: '#ECEFF1', color: '#00bcd4' }}
              key={`${cat}-${this.props.quest.id}`}
            >
              <ChipText> {cat} {this.props.quest.skills[cat]} </ChipText>
            </Chip>
          ))}
        </ChipSet>
      </Typography>
    )
  }

  renderSummary() {
    return (
      <Typography
        use="body1"
        tag="div"
        style={{
          color: '#90A4AE',
          padding: '10px'
        }}
      >
        {this.props.quest.summary}
      </Typography>
    )
  }

  renderAuthor() {
    return (
      <div
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          display: 'flex',
          height: '50px',
          padding: '0px'
        }}
      >
        <Typography
          use="caption"
          tag="div"
          style={{
            color: '#B0BEC5',
            textAlign: 'left',
            cursor: 'pointer'
          }}
          onClick={() => window.open(this.props.quest.author.link)}
        >
          7 Challenges
        </Typography>
      </div>
    )
  }

  renderDifficulty() {

    const xp = this.props.quest.xp
    const level = this.props.quest.level

    return (
      <Typography
        use="body1"
        tag="div"
        style={{
          color: '#00bcd4',
          textAlign: 'right',
          display: 'flex',
          height: '50px',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'center',
          padding: '0px'
        }}
      >
        <Chip
          style={{
            backgroundColor: '#ffffff',
            color: '#00bcd4',
            border: '1px solid #00bcd4',
            padding: '0px'
          }}
        >
          <span style={{ padding: '0px 10px 0px 10px' }}>{level}</span>
          <Chip
            style={{
              backgroundColor: '#00bcd4',
              color: '#ffffff',
              margin: '-1px'
            }}
          >
            <ChipText> {xp} XP </ChipText>
          </Chip>
        </Chip>
      </Typography>
    )
  }

  renderDetails() {
    return (
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          padding: '10px',
          marginTop: '-10px'
        }}
      >
        {this.renderAuthor()}
        {this.renderDifficulty()}
      </div>
    )
  }

  renderTitle() {
    return (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start'
        }}
      >
        <Typography
          use="headline5"
          tag="div"
          style={{
            color: '#455A64',
            maxWidth: '90%',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            marginLeft: "10px",
            display: 'inline-block'
          }}>
          {this.props.quest.title}
        </Typography>
      </div>
    )
  }

  renderButton() {
    if (this.props.minimal) {
      return <div/>
    }

    const { quest } = this.props
    let prompt = 'Start Quest'

    return <Button
      onClick={() => this.props.onSelectQuest(quest)}
      style={{
        display: 'flex',
        color: '#ffffff',
        backgroundColor:  '#03A9F4',
        border: 'none',
        margin: '10px auto 0',
        height: '35px',
        lineHeight: '15px'
      }}
    >
      {prompt} <Icon type="caret-right" />
    </Button>
  }

  render() {
    return <Card title={this.renderTitle()} className={'challenge-card'} style={{
      display: "flex",
      flex: 1,
      flexDirection: "column",
      width: "100%"
    }}>
      {this.renderSummary()}
      {this.renderDetails()}
      {this.renderSkills()}
      {this.renderButton()}
    </Card>
  }
}
