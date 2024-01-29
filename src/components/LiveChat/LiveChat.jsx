import React, { useEffect, useState } from "react"
import useSocketForLiveChat from "../../data-access/useSocketForLiveChat"
import Chatbox from "./components/Chatbox/Chatbox"
import styles from "./LiveChat.module.scss"

const LiveChat = ({ teamCdn }) => {
  const [isBoxOpen, setIsBoxOpen] = useState(false)
  const [chatbotConfig, setChatbotConfig] = useState()

  const [msgList, setMsgList] = useState([])
  const [uuid, setUUID] = useState("")
  const [agentUUID, setAgentUUID] = useState("")

  const [socket] = useSocketForLiveChat(setMsgList, agentUUID)
  return (
    <div className={styles.liveChatContainer + " " + styles.opened}>
      <div className={styles.flex}>
        <input type="text" value={uuid} className={styles.inputAgentUUID} placeholder="Enter Agent UUID here..." onChange={(e) => setUUID(e.target.value)} />
        <button onClick={() => setAgentUUID(uuid)}>Enter</button>
      </div>
      <Chatbox socket={socket} allMessages={msgList} setAllMessages={setMsgList} teamCdn={teamCdn} chatbotConfig={chatbotConfig} setIsBoxOpen={setIsBoxOpen} />
    </div>
  )
}

export default LiveChat
