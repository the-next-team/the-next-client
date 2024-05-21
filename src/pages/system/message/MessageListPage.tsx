import {
    useQuery
} from '@tanstack/react-query'
import { MessageService } from '../../../api/services/messageService'

function MessageListPage() {
    const query = useQuery({
        queryKey: ['messageList'],
        queryFn: MessageService.getMessages,
    })
  return (
    <div>MessageListPage</div>
  )
}

export default MessageListPage