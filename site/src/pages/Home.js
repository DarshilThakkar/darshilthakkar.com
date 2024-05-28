import React, { useState, useEffect } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { toast, Toaster } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

function Home() {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");
  const user = auth.currentUser;

  const postCollectionRef = collection(db, "posts");

  const handlePublish = async (e) => {
    e.preventDefault();
    await addDoc(postCollectionRef, {
      title,
      tags,
      content,
      author: {
        name: user.displayName,
        id: user.email,
      },
    });
  };

  const handlePublishWithToast = async (e) => {
    await handlePublish(e);
    toast("Entry Published Successfully!! 🥳", {
      description: "Thank you for keeping Community Active..😇 Now we are redirecting you to feed page...",
      action: {
        label: "Close",
        onClick: () => console.log("Close"),
      },
    });
    setTimeout(() => {
      window.location.pathname = "/";
    }, 3000);
  };

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = collection(db, "posts");
      const snapshot = await getDocs(postsCollection);
      const postsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postsData);
    };
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedPost(null);
    setDialogOpen(false);
  };

  return (
    <div className="main-content">
      <br />
      <Tabs defaultValue="feed" className="w-full">
        <TabsList>
          <TabsTrigger value="feed" className="menubar">🎙️ Feed</TabsTrigger>
          <TabsTrigger value="announcement" className="menubar">📣 Announcements</TabsTrigger>
          <TabsTrigger value="createentry" className="menubar">🔗 Create New Entry</TabsTrigger>
        </TabsList>
        <br />
        <TabsContent value="feed" className="feed">
          <br></br>
          <div className="grid grid-cols-3 gap-4 cc">
            {currentPosts.map((post) => (
              <div
                key={post.id}
                className="border rounded-md p-4 cursor-pointer h-64 overflow-hidden"
              >
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p className="text-sm text-gray-500"># {post.tags}</p>
                <p className="text-sm text-gray-500">
                  By {post.author.name} ({post.author.id})
                </p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.content.substring(0, 160),
                  }}
                />
                <br></br>

                <Dialog>
                  <DialogTrigger onClick={() => handlePostClick(post)}>
                    <u>Read More</u>
                  </DialogTrigger>
                  <DialogContent>
                    {selectedPost && (
                      <>
                        <div className="dialog-content">
                          <h2 className="text-xl font-bold">
                            {selectedPost.title}
                          </h2>
                          <p className="text-sm text-gray-500">
                            {selectedPost.tags}
                          </p>
                          <p className="text-sm text-gray-500">
                            By {selectedPost.author.name} (
                            {selectedPost.author.id})
                          </p>
                          <br></br>
                          <hr></hr>
                          <br></br>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: selectedPost.content,
                            }}
                          />
                        </div>
                        
                      </>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>

          <br></br>
          <div className="flex justify-center">
            <Button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <div className="w-4"></div> { }
            <Button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPosts.length < postsPerPage}
            >
              Next
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="announcement" className="feed">
          <div className="p-6 space-y-4"><br></br>
            <h1 className="text-2xl font-bold">📣 Announcements</h1><br></br>
            <p>
              Welcome to the Announcements section! Here are some guidelines to
              help you post effectively:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                👤 <strong>Sign In:</strong> Please make sure you are signed in
                to post an entry. You can sign in using the button at the top
                right corner of the page.
              </li>
              <li>
                📝 <strong>Clear Title:</strong> Make your title descriptive and
                concise so others can quickly understand the topic of your
                announcement.
              </li>
              <li>
                🏷️ <strong>Use Tags:</strong> Add relevant tags to your post to
                help others find it easily. Separate tags with commas.
              </li>
              <li>
                ✍️ <strong>Content:</strong> Ensure your content is clear,
                informative, and well-organized. Use the formatting tools
                available to enhance readability.
              </li>
              <li>
                📸 <strong>Media:</strong> You can add images and videos to make
                your posts more engaging. Use the toolbar to insert media.
              </li>
              <li>
                🔒 <strong>Respect Privacy:</strong> Do not share personal
                information or anything that might compromise someone's privacy.
              </li>
            </ul>
            <p>
              If you have any questions or need assistance, feel free to reach
              out to me. Happy posting! 😊
            </p>
          </div>
        </TabsContent>
        <br />
        <TabsContent value="createentry" className="feed">
          {user ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 temp">
              <div
                className="p-4 border border-white rounded-md"
                style={{ height: "580px" }}
              >
                <form className="space-y-6" onSubmit={handlePublish}>
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Enter the title"
                    />
                  </div>
                  <div>
                    <Label htmlFor="tags">Tags</Label>
                    <Input
                      id="tags"
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                      placeholder="Enter tags separated by commas"
                    />
                  </div>
                  <div>
                    <Label htmlFor="content">Content</Label>
                    <div className="mb-4">
                      <ReactQuill
                        value={content}
                        onChange={setContent}
                        placeholder="Write your blog content here"
                        style={{ height: "300px"}}
                        modules={{
                          toolbar: [
                            [{ header: "1" }, { header: "2" }, { font: [] }],
                            [{ size: [] }],
                            [
                              "bold",
                              "italic",
                              "underline",
                              "strike",
                              "blockquote",
                            ],
                            [
                              { list: "ordered" },
                              { list: "bullet" },
                              { indent: "-1" },
                              { indent: "+1" },
                            ],
                            ["link", "image", "video", "clean"],
                          ],
                        }}
                        formats={[
                          "header",
                          "font",
                          "size",
                          "bold",
                          "italic",
                          "underline",
                          "strike",
                          "blockquote",
                          "list",
                          "bullet",
                          "indent",
                          "link",
                          "image",
                          "video",
                        ]}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="p-4 border border-white rounded-md space-y-4">
                <h2 className="text-xl font-semibold klas">Post Preview</h2>
                <Button type="submit" onClick={handlePublishWithToast}>
                  Publish
                </Button>
                <div
                  className="border border-white p-4 rounded-md h-96 overflow-auto"
                  style={{ height: "475px" }}
                >
                  <h3 className="text-2xl font-bold">{title}</h3>
                  <p className="text-sm text-gray-500">
                    {tags
                      .split(",")
                      .map((tag) => tag.trim())
                      .join(", ")}
                  </p>
                  <div
                    className="quill-content"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6 text-center">
              <p className="text-xl font-semibold">
                Please sign in to create a new entry :(
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
      <Toaster />
    </div>
  );
}

export default Home;
