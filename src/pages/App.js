import React from "react";
import Header from "../components/Header";
import Bucketlist from "../components/Bucketlist";
import { connect } from "react-redux";
import AlphaActionButton from "../components/AlphaActionButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "../redux/action";
import { useDispatch } from "react-redux";

function App(props) {
  const { lists } = props;
  const dispatch = useDispatch();

  console.log(lists);

  const onDragend = (result) => {
    // rerending logic

    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };

  return (
    <DragDropContext onDragEnd={onDragend}>
      <div
        style={{
          background:
            "linear-gradient(to right,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(/images/bg.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="h-screen w-screen flex flex-col"
      >
        <Header />
        <div className="overflow-auto w-full">
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="flex-1 overflow-auto overflow-x-auto flex items-start gap-5 w-full pl-10 pt-10"
              >
                {lists.map((data, index) => (
                  <Bucketlist
                    listID={data.id}
                    key={data.id}
                    title={data.title}
                    index={index}
                    cards={data.cards}
                  />
                ))}
                <AlphaActionButton lists />
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
}

const mapStateToProps = (state) => ({
  lists: state.bucket_lists,
});

export default connect(mapStateToProps)(App);
