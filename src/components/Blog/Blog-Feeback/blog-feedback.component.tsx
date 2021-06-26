import { motion } from "framer-motion";
import { FC } from "react";


const FeedbackData = [
    {
    emoji: '🙁',
    value:1,
    },{
    emoji: '🙂',
    value: 2,
},{
    emoji: '😊',
    value: 3,
}, { 
    emoji: '😇',
    value: 4
}, {
    emoji: '😍',
    value: 5
}]


interface BlogFeedbackType {
    id: string;
}

const BlogFeedback: FC<BlogFeedbackType> = ({ id }) => {

    return <div className="w-11/12 font-primary py-2 sm:w-5/12">
       <h4 className="text-base"> Was this helpful? </h4> 
       <div className="flex items-center py-2">
         { FeedbackData.map(feedback => <motion.div whileTap={{ scale: 0.8 }} className="text-3xl hover:text-2xl cursor-pointer mr-3" key={feedback.emoji}> {feedback.emoji} </motion.div>) }
       </div>
    </div>
}

export default BlogFeedback;