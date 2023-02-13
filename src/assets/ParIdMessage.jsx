
import { Dialog} from "@reach/dialog";
import { useState } from 'react';
import "./parIdMessage.css"
import { gql, useQuery } from '@apollo/client';
import { ThreeDots } from 'react-loader-spinner';
import  "../assets/ParIdMessage.css"
import "@reach/dialog/styles.css";

const GetParticularId = gql`
query MESSAGE_QUERY($id: String!){
  message(id: $id) {
    id
    author {
      login
    }
    subject
    body
    language
    metrics {
      views
    }
    view_href
    post_time
  }
}
`

const ParIdMessage = props => {
    const {setCurrentState, messageId} = props

    const Close = () => {
      setCurrentState(false)
    }

    const {data, loading, error} = useQuery(GetParticularId, {
        variables : {
            id : messageId
        }
    })

    if (error) <p>{error.errorMessage}</p>

    if (loading) return (
        <ThreeDots color="#00BFFF" height={80} width={80} />
      )


    
    return (
        <div >
          <Dialog  isOpen = {setCurrentState} onDismiss = {Close}>
            <div>
            <p className="heading">Details Of Messge</p>
            <p><span>Id: </span>{data?.message?.id}</p>
            <p><span>Author: </span>{data?.message?.author?.login}</p>
            <p><span>Subject: </span>{data?.message?.subject}</p>
            <p><span>Language: </span>{data?.message?.language}</p>
            <p><span>Viwes: </span>{data?.message?.metrics.views}</p>
            <p><span>Link : </span><a href={data?.message?.view_href} target="_blank">{data?.message?.view_href}</a></p>
            <p><span>PostTime: </span>{data?.message.post_time}</p>
            </div>
            <button onClick={Close}>Close</button>
          </Dialog>
        </div>
    )

}

export default ParIdMessage