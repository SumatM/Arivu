import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import AdminSidebar from "../AdminSidebar";
import AdminNavTop from "../AdminNavTop";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addVideo } from "../../Redux/AdminReducer/action";

const AddVideo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { courseId } = useParams();
  let obj = {
    title: "",
    description: "",
    link: "",
    views: "",
  };

  const [detail, setDetail] = useState(obj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = () => {
    // console.log(detail);
    dispatch(addVideo(detail, courseId));
    alert("User Added Successfully");
    navigate("/admin/videos");
  };

  return (
    <Grid className="Nav" h={"99vh"} w="94%" gap={10}>
      <AdminSidebar />
      <Box>
        <AdminNavTop />

        <Box border={"2px solid gray"} borderRadius={10} p={10} h="90%">
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              placeholder="Enter Course Title"
              name="title"
              value={detail.title}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Textarea
              type="text"
              placeholder="Enter Description"
              name="description"
              value={detail.description}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Link</FormLabel>
            <Input
              type="text"
              placeholder="Enter video Link"
              name="link"
              value={detail.link}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Views</FormLabel>
            <Input
              type="text"
              placeholder="Enter Total Views"
              name="views"
              value={detail.views}
              onChange={handleChange}
            />
          </FormControl>
          <Button
            mt={4}
            colorScheme="blue"
            size="md"
            isFullWidth
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default AddVideo;
