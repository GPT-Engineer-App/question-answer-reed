import { Container, Text, VStack, Heading, Box, Input, Button, Stack, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { FaQuestionCircle, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState("");

  const handleQuestionSubmit = () => {
    if (question.trim() !== "") {
      setQuestions([...questions, question]);
      setQuestion("");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="2xl" mb={6}>Q&A Website</Heading>
        <Box width="100%">
          <HStack>
            <Input 
              placeholder="Ask your question..." 
              value={question} 
              onChange={(e) => setQuestion(e.target.value)} 
              size="lg"
            />
            <Button 
              leftIcon={<FaPaperPlane />} 
              colorScheme="teal" 
              size="lg" 
              onClick={handleQuestionSubmit}
            >
              Ask
            </Button>
          </HStack>
        </Box>
        <Box width="100%" mt={6}>
          <Heading as="h2" size="lg" mb={4}>Questions</Heading>
          <VStack spacing={4} align="stretch">
            {questions.length === 0 ? (
              <Text>No questions asked yet. Be the first!</Text>
            ) : (
              questions.map((q, index) => (
                <Box key={index} p={4} shadow="md" borderWidth="1px" borderRadius="md">
                  <HStack>
                    <FaQuestionCircle />
                    <Text>{q}</Text>
                  </HStack>
                </Box>
              ))
            )}
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;