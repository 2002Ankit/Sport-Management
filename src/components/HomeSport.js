import React, { useState } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./HomeSport.css";
import { Link } from "react-router-dom";

const para1 = ` Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket at each end, each comprising two bails balanced on three stumps. The batting side scores runs by striking the ball bowled at one of the wickets with the bat and then running between the wickets, while the bowling and fielding side tries to prevent this (by preventing the ball from leaving the field, and getting the ball to either wicket) and dismiss each batter (so they are out). Means of dismissal include being bowled, when the ball hits the stumps and dislodges the bails, and by the fielding side either catching the ball after it is hit by the bat, but before it hits the ground, or hitting a wicket with the ball before a batter can cross the crease in front of the wicket. When ten batters have been dismissed, the innings ends and the teams swap roles. The game is adjudicated by two umpires, aided by a third umpire and match referee in international matches. They communicate with two off-field scorers who record the match's statistical information.`


const para2 = `Chess is a board game for two players, called White and Black, each controlling an army of chess pieces, with the objective to checkmate the opponent's king. It is sometimes called international chess or Western chess to distinguish it from related games such as xiangqi (Chinese chess) and shogi (Japanese chess). The recorded history of chess goes back at least to the emergence of a similar game, chaturanga, in seventh century India. The rules of chess as they are known today emerged in Europe at the end of the 15th century, with standardization and universal acceptance by the end of the 19th century. Today, chess is one of the world's most popular games played by millions of people worldwide.

Chess is an abstract strategy game that involves no hidden information and no elements of chance. It is played on a chessboard with 64 squares arranged in an 8×8 grid. At the start, each player controls sixteen pieces: one king, one queen, two rooks, two bishops, two knights, and eight pawns. White moves first, followed by Black. The game is won by checkmating the opponent's king, i.e. threatening it with inescapable capture. There are also several ways a game can end in a draw.`
const para3 = `  Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football normally means the form of football that is the most popular where the word is used. Sports commonly called football include association football (known as soccer in North America, Ireland and Australia); gridiron football (specifically American football or Canadian football); Australian rules football; rugby union and rugby league; and Gaelic football. These various forms of football share, to varying degrees, common origins and are known as "football codes".

There are a number of references to traditional, ancient, or prehistoric ball games played in many different parts of the world. Contemporary codes of football can be traced back to the codification of these games at English public schools during the 19th century. The expansion and cultural influence of the British Empire allowed these rules of football to spread to areas of British influence outside the directly controlled Empire. By the end of the 19th century, distinct regional codes were already developing: Gaelic football, for example, deliberately incorporated the rules of local traditional football games in order to maintain their heritage. In 1888, The Football League was founded in England, becoming the first of many professional football associations. During the 20th century, several of the various kinds of football grew to become some of the most popular team sports in the world.`

const para4 = `Hockey is a term used to denote a family of various types of both summer and winter team sports which originated on either an outdoor field, sheet of ice, or dry floor such as in a gymnasium. While these sports vary in specific rules, numbers of players, apparel, and playing surface, they share broad characteristics of two opposing teams using a stick to propel a ball or disk into a goal.

There are many types of hockey. Some games make the use of skates, either wheeled, or bladed while others do not. In order to help make the distinction between these various games, the word hockey is often preceded by another word i.e. field hockey, ice hockey, roller hockey, rink hockey, or floor hockey.

In each of these sports, two teams play against each other by trying to manoeuvre the object of play, either a type of ball or a disk (such as a puck), into the opponent's goal using a hockey stick. Two notable exceptions use a straight stick and an open disk (still referred to as a puck) with a hole in the center instead. The first case is a style of floor hockey whose rules were codified in 1936 during the Great Depression by Canada's Sam Jacks. The second case involves a variant which was later modified in roughly the 1970s to make a related game that would be considered suitable for inclusion as a team sport in the newly emerging Special Olympics. The floor game of gym ringette, though related to floor hockey, is not a true variant due to the fact that it was designed in the 1990s and modelled off of the Canadian ice skating team sport of ringette, which was invented in Canada in 1963. Ringette was also invented by Sam Jacks, the same Canadian who codified the rules for the open disk style of floor hockey 1936.`


const HomeSport = () => {
    const [readmore, setReadmore] = useState(false);
    const [readmoredata, setReadmoredata] = useState(false);
    const [readinfo, setReadmoreinfo] = useState(false);
    const [readdata, setReaddata] = useState(false);


    const desc1 = readmore ? para1 : `${para1.substring(0, 300)}...`
    const desc2 = readmoredata ? para2 : `${para2.substring(0, 300)}...`
    const desc3 = readinfo ? para3 : `${para3.substring(0, 300)}...`
    const desc4 = readdata ? para4 : `${para4.substring(0, 300)}...`

    function readHandler1() {

        setReadmore(!readmore)
    }

    function readHandler2() {

        setReadmoredata(!readmoredata)
    }
    function readHandler3() {

        setReadmoreinfo(!readinfo)
    }
    function readHandler4() {

        setReaddata(!readdata)
    }



    return (
        <div className="parallax-container">
            <div className=" flex flex-col gap-1 mb-5">
                <h2 className=" font-sans font-semibold text-[28px] text-slate-300 text-center  ">Read about some sports</h2>
                <div className=" h-[1px] bg-gray-600 m-auto w-[40%]"></div>
            </div>

            <div className="bg bg1">

            </div>
            <p className="para bg-richblack-800">
                <p className="text-[25px] text-white underline mb-3 ">Cricket</p>
                {desc1}
                <span onClick={readHandler1} className=" text-blue-400 hover:cursor-pointer">{readmore ? `Showless` : `Readmore`}</span>

                <Link to="/outdoor" className=" flex justify-end items-center text-[16px] text-blue-500 hover:text-richblack-25 gap-2 cursor-pointer">
                    <p>Click to register now </p>
                    <span><ArrowRightOutlined /></span>
                </Link>

            </p>

            <div className="bg bg2">

            </div>

            <p className="para bg-richblack-800">
                <p className=" text-[25px] text-white underline mb-3">Chess</p>
                {desc2}
                <span onClick={readHandler2} className=" text-blue-400 hover:cursor-pointer">{readmoredata ? `Showless` : `Readmore`}</span>
                <Link to="/indoor" className=" flex justify-end items-center text-[16px] text-blue-500 gap-2 hover:text-richblack-25 cursor-pointer">
                    <p>Click to register now </p>
                    <span><ArrowRightOutlined /></span>
                </Link>
            </p>

            <div className="bg bg3">

            </div>

            <p className="para bg-richblack-800">
                <p className=" text-[25px] text-white underline mb-3">Football</p>
                {desc3}
                <span onClick={readHandler3} className=" text-blue-400 hover:cursor-pointer">{readinfo ? `Showless` : `Readmore`}</span>
                <Link to="/outdoor" className=" flex justify-end items-center text-[16px] text-blue-500 hover:text-richblack-25 gap-2 cursor-pointer">
                    <p>Click to register now </p>
                    <span><ArrowRightOutlined /></span>
                </Link>
            </p>

            <div className="bg bg4">

            </div>

            <p className="para bg-richblack-800">
                <p className=" text-[25px] text-white underline mb-3">Hockey</p>
                {desc4}
                <span onClick={readHandler4} className=" text-blue-400 hover:cursor-pointer">{readdata ? `Showless` : `Readmore`}</span>
                <Link to="/outdoor" className=" flex justify-end items-center text-[16px] text-blue-500 hover:text-richblack-25 gap-2 cursor-pointer">
                    <p>Click to register now </p>
                    <span><ArrowRightOutlined /></span>
                </Link>
            </p>


        </div>

    )
}
export default HomeSport;