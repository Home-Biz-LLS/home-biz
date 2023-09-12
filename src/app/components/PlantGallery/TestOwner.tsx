import prisma from "../../../../prisma/prisma";

const TestCards = async() => {
  // const handlePlants = async () => {
  //   const plants = await fetch("/api/user");
  //   console.log(plants);
  // };

const users = await prisma.owner.findMany()

  return (
    <div>
      {/* <button onClick={handlePlants}>Click Me</button> */}
      {users.map((user,index) => <p key={index}>{user.id}</p>)}
    </div>
  );
};

export default TestCards;